import{v as f,o as n,c as m,a1 as u}from"./chunks/framework.BX4nIuL2.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"courses/cmf/index.md","filePath":"courses/cmf/index.md"}'),v={name:"courses/cmf/index.md"},x=Object.assign(v,{setup(g){return f(()=>{const s=document.querySelector(".fab-grid-container");if(!s)return;s.querySelectorAll("a").forEach(a=>{a.addEventListener("click",l=>{const o=a.getAttribute("href");if(!o||o==="#"||o.startsWith("javascript:"))return;l.preventDefault();const t=document.getElementById("detail-iframe");t&&(t.src=o);const r=document.getElementById("iframe-title-text");if(r){const d=a.innerText||a.textContent;r.innerText=`文档预览: ${d.trim()}`}const b=document.getElementById("dashboard-root");b&&b.classList.add("active-details"),document.querySelectorAll(".fab-item-box, .fab-process-box").forEach(d=>{d.classList.remove("active-card")});let i=a.closest(".fab-item-box");i||(i=a.querySelector(".fab-process-box")),i&&i.classList.add("active-card")})});const c=document.getElementById("detail-iframe");c&&c.addEventListener("load",()=>{try{const a=c.contentDocument||c.contentWindow.document,l=a.createElement("style");l.textContent=`
          .VPNav { display: none !important; }
          .VPLocalNav { display: none !important; }
          .VPContent { 
            padding-top: 0 !important;
            padding-left: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .VPSidebar {
            top: 0 !important;
            padding-top: 1rem !important;
            background: transparent !important;
          }
          .VPDoc {
            padding-top: 1rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .VPDocFooter { display: none !important; }
          
          /* Force iframe scrollbar styling to match dashboard */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `,a.head.appendChild(l)}catch(a){console.error("Failed to style iframe content:",a)}})}),typeof window<"u"&&(window.closeDetails=function(){const s=document.getElementById("dashboard-root");s&&s.classList.remove("active-details"),document.querySelectorAll(".fab-item-box, .fab-process-box").forEach(c=>{c.classList.remove("active-card")});const e=document.getElementById("detail-iframe");e&&(e.src="about:blank")}),(s,e)=>(n(),m("div",null,[...e[0]||(e[0]=[u("",1)])]))}});export{k as __pageData,x as default};
