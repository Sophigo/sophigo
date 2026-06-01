import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h, onMounted, nextTick } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // We can insert elements if needed
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Custom enhancements
  },
  setup() {
    onMounted(() => {
      // 1. Configure Hypothesis Client dynamic integration
      window.hypothesisConfig = function () {
        const token = localStorage.getItem('token');
        const config = {
          showSidebar: false,
          theme: 'clean',
          branding: {
            appBackgroundColor: '#0B0B0C',
            ctaBackgroundColor: '#002FA7',
            ctaTextColor: '#ffffff',
            selectionNoticeBorderColor: '#002FA7'
          },
          onLoginRequest: function() {
            // Redirect to landing page to sign in, with redirect back URL
            const currentUrl = window.location.href;
            window.location.href = `/?login=1&redirect=${encodeURIComponent(currentUrl)}`;
          }
        };

        if (token) {
          // In a production setup, we would append the publisher grant token here:
          // config.services = [{
          //   authority: 'profabx.com',
          //   grant_token: 'SIGNED_JWT_FROM_BACKEND'
          // }];
        }

        return config;
      };

      // Load Hypothesis client script
      const script = document.createElement('script');
      script.src = 'https://hypothes.is/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // 2. Initialize Local High-Fidelity Highlight & Commenting System
      nextTick(() => {
        setupLocalComments();
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
