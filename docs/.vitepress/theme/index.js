import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute()
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () => {
        const path = route.path
        let suffix = ''
        if (path.includes('/courses/fab-course/')) suffix = 'Fab 课程'
        else if (path.includes('/courses/ai-basics/')) suffix = 'AI 基础应用'
        else if (path.includes('/courses/mobile-robot/')) suffix = '移动机器人'
        else if (path.includes('/courses/cmf/')) suffix = 'CMF 应用'
        
        if (!suffix) return null
        
        return h('span', {
          style: {
            fontSize: '0.9rem',
            fontWeight: '600',
            color: 'var(--vp-c-brand-1)',
            marginLeft: '8px',
            paddingLeft: '8px',
            borderLeft: '1px solid var(--vp-c-border)',
            display: 'inline-block',
            verticalAlign: 'middle'
          }
        }, suffix)
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Custom enhancements
  },
  setup() {
    const route = useRoute()
    onMounted(() => {
      // Initialize Local High-Fidelity Highlight & Commenting System
      nextTick(() => {
        setupLocalComments();
        setupSidebarLinks();
        setupHomeLinks();
        fixProductionLinks();
      });
    });
    watch(() => route.path, () => {
      nextTick(() => {
        fixProductionLinks();
      });
    });
  }
}

// Local High-Fidelity Highlight Engine
function setupLocalComments() {
  let activePopover = null;

  // Listen for selection changes on the main content
  document.addEventListener('mouseup', handleTextSelection);

  // Load and apply existing highlights on page load
  fetchAndApplyHighlights();

  function handleTextSelection(event) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      // Clicked outside, remove active popover if clicking outside its area
      if (activePopover && !activePopover.contains(event.target)) {
        removePopover();
      }
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) return;

    // Check if the selection is inside the main doc content
    const docContent = document.querySelector('.vp-doc');
    if (!docContent || !docContent.contains(selection.anchorNode)) return;

    // Determine coordinate bounds for placement of the popup
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    createCommentPopover(rect, selectedText, range);
  }

  function createCommentPopover(rect, selectedText, range) {
    removePopover();

    const token = localStorage.getItem('token');
    
    const popover = document.createElement('div');
    popover.className = 'profabx-comment-popover';
    popover.style.top = `${window.scrollY + rect.top - 120}px`;
    popover.style.left = `${window.scrollX + rect.left + (rect.width / 2) - 140}px`;

    if (!token) {
      // Unauthenticated state view
      popover.innerHTML = `
        <h4>添加划词批注</h4>
        <div style="font-size: 0.8rem; color: var(--vp-c-text-2); margin-bottom: 0.5rem;">
          💡 请先登录系统以添加划词评论和高亮批注。
        </div>
        <div class="buttons">
          <button class="btn-cancel">取消</button>
          <button class="btn-save" style="background-color: #ff453a;">去登录</button>
        </div>
      `;

      popover.querySelector('.btn-cancel').onclick = removePopover;
      popover.querySelector('.btn-save').onclick = () => {
        const currentUrl = window.location.href;
        window.location.href = `/?login=1&redirect=${encodeURIComponent(currentUrl)}`;
      };
    } else {
      // Authenticated state view
      popover.innerHTML = `
        <h4>添加划词批注</h4>
        <div style="font-size: 0.75rem; color: var(--vp-c-text-3); font-style: italic; margin-bottom: 0.25rem;">
          "${selectedText.substring(0, 30)}${selectedText.length > 30 ? '...' : ''}"
        </div>
        <textarea placeholder="撰写您的批注或疑问..."></textarea>
        <div class="buttons">
          <button class="btn-cancel">取消</button>
          <button class="btn-save">保存批注</button>
        </div>
      `;

      popover.querySelector('.btn-cancel').onclick = removePopover;
      popover.querySelector('.btn-save').onclick = () => saveComment(popover.querySelector('textarea').value, selectedText, range);
    }

    document.body.appendChild(popover);
    activePopover = popover;
  }

  function removePopover() {
    if (activePopover) {
      activePopover.remove();
      activePopover = null;
    }
  }

  async function saveComment(commentText, highlightText, range) {
    if (!commentText.trim()) return;
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          text: commentText,
          highlight: highlightText,
          selector: '.vp-doc'
        })
      });

      if (!response.ok) throw new Error('Failed to save comment');
      
      const newComment = await response.json();

      // Highlight the text inline
      highlightSelection(range, newComment);
      removePopover();
      
      // Clear selection
      window.getSelection().removeAllRanges();
    } catch (err) {
      console.error(err);
      alert('保存失败，请稍后再试');
    }
  }

  function highlightSelection(range, commentObj) {
    const span = document.createElement('span');
    span.className = 'profabx-highlighted-text';
    span.title = `[${commentObj.username}]: ${commentObj.text}`;
    
    // Highlight wrapper element mouseover tooltip
    span.onclick = () => {
      alert(`用户 [${commentObj.username}] 批注于 [${commentObj.created_at}]:\n\n"${commentObj.text}"`);
    };

    try {
      range.surroundContents(span);
    } catch (e) {
      // Fallback if range spans multiple elements complexly
      const clone = range.cloneContents();
      span.appendChild(clone);
      range.deleteContents();
      range.insertNode(span);
    }
  }

  async function fetchAndApplyHighlights() {
    try {
      const response = await fetch('/api/comments');
      if (!response.ok) return;
      const comments = await response.json();
      
      // Simple text replacement highlighter for demonstration of existing comments
      const docContent = document.querySelector('.vp-doc');
      if (!docContent || comments.length === 0) return;

      comments.forEach(comment => {
        // Find text content matching comment.highlight inside paragraphs
        const paragraphs = docContent.querySelectorAll('p, li');
        for (let p of paragraphs) {
          const text = p.innerHTML;
          if (text.includes(comment.highlight) && !p.querySelector('.profabx-highlighted-text')) {
            const highlightedHtml = `<span class="profabx-highlighted-text" title="[${comment.username}]: ${comment.text}" id="comment-hl-${comment.id}">${comment.highlight}</span>`;
            p.innerHTML = text.replace(comment.highlight, highlightedHtml);
            
            // Add click listener to the highlighted element
            const hlEl = document.getElementById(`comment-hl-${comment.id}`);
            if (hlEl) {
              hlEl.onclick = () => {
                alert(`用户 [${comment.username}] 批注于 [${comment.created_at}]:\n\n"${comment.text}"`);
              };
            }
            break; // only highlight first match to prevent infinite loops
          }
        }
      });
    } catch (e) {
      console.warn('Failed to load highlights:', e);
    }
  }
}

// Ensure collapsible group headers also navigate to their links and vice-versa
function setupSidebarLinks() {
  let isHandling = false;
  document.addEventListener('click', (event) => {
    if (isHandling) return;

    // Find the item container inside a collapsible sidebar item
    const item = event.target.closest('.VPSidebarItem.collapsible > .item');
    if (!item) return;

    const link = item.querySelector('.link');
    const caret = item.querySelector('.caret');
    if (!link || !caret) return;

    // We clicked somewhere in the collapsible folder header
    isHandling = true;
    
    // Check if the click target was the caret or inside it
    if (caret.contains(event.target)) {
      // Vue handles caret click (toggles collapse). We need to trigger navigation.
      link.click();
    } else {
      // We clicked on the link or on the empty space of the item.
      // Trigger caret click to toggle the collapse.
      caret.click();
      
      // If we didn't click inside the link itself (e.g. clicked on empty space of .item),
      // we also need to trigger link click to navigate.
      if (!link.contains(event.target)) {
        link.click();
      }
    }

    isHandling = false;
  });
}

// Get dynamic homepage URL based on host, port, and environment settings
function getHomepageUrl() {
  const hostname = window.location.hostname;
  const port = window.location.port;

  // Case 1: Local development with separate dev ports (VitePress running on port 5174)
  if ((hostname === 'localhost' || hostname === '127.0.0.1') && port === '5174') {
    return 'http://localhost:5173/';
  }

  // Case 2: Local preview mode (running on port 4173 or other local ports besides 5174)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `http://${hostname}:${port || '4173'}/`;
  }

  // Case 3: Production deployment (GitHub Pages, custom domain, etc.)
  return 'https://sophigo.com/';
}

// Intercept clicks on homepage links (Logo, "首页", and "返回主站" button)
// in the capture phase to override default VitePress routing.
function setupHomeLinks() {
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor) return;

    const isLogo = anchor.classList.contains('title') && anchor.closest('.VPNavBarTitle');
    const isHomeNav = (anchor.classList.contains('VPNavBarMenuLink') || anchor.classList.contains('VPNavScreenMenuLink')) && anchor.textContent.trim() === '首页';
    const isBackButton = anchor.classList.contains('VPButton') && anchor.textContent.includes('返回主站');

    if (isLogo || isHomeNav || isBackButton) {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = getHomepageUrl();
    }
  }, true); // useCapture = true to execute before Vue router intercepts the click
}

// Adjust links dynamically in the document to point to the correct main site homepage
function fixProductionLinks() {
  const targetHome = getHomepageUrl();

  nextTick(() => {
    // 1. Rewrite any hardcoded local dev links to the correct homepage target
    document.querySelectorAll('a').forEach(a => {
      if (a.href && (
        a.href.startsWith('http://localhost:5173') || 
        a.href.startsWith('http://127.0.0.1:5173') ||
        a.href.startsWith('http://localhost:4173') ||
        a.href.startsWith('http://127.0.0.1:4173')
      )) {
        try {
          const urlPath = new URL(a.href).pathname;
          if (urlPath === '/' || urlPath === '' || urlPath === '/docs' || urlPath === '/docs/') {
            if (urlPath === '/' || urlPath === '') {
              a.href = targetHome;
            }
          } else {
            a.href = urlPath;
          }
        } catch (e) {}
      }
    });

    // 2. Force logo + "首页" links + "返回主站" links to go to the correct homepage (targetHome)
    document.querySelectorAll('.VPNavBarMenuLink, .VPNavScreenMenuLink, .VPNavBarTitle a, .VPNavBarTitle a.title, a.logo, a.VPButton').forEach(link => {
      const text = link.textContent.trim();
      if (text === '首页' || 
          text.includes('返回主站') || 
          link.classList.contains('title') || 
          link.classList.contains('logo') || 
          link.querySelector('.logo')) {
        link.setAttribute('href', targetHome);
      }
    });
  });
}
