import{_ as v}from"./chunks/logo.PPNoggWL.js";import{v as F,o as y,c as A,a1 as C}from"./chunks/framework.BX4nIuL2.js";const M=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"courses/cmf/index.md","filePath":"courses/cmf/index.md"}'),B={name:"courses/cmf/index.md"},E=Object.assign(B,{setup(P){const f=[{id:"all",label:"全部"},{id:"material",label:"材料"},{id:"additive",label:"增材"},{id:"subtractive",label:"减材"},{id:"forming",label:"成型"},{id:"surface",label:"表面"},{id:"workflow",label:"工作流"}],a=[{id:"engineering-polymers",category:"material",label:"材料",title:"工程塑料族",subtitle:"从外观壳体到耐磨功能件",description:"以 ABS、PC、POM、PEEK、TPU 和尼龙为核心，建立课程中最常用的塑料材料选择逻辑。",swatch:"linear-gradient(135deg, #312E81, #3B82F6 52%, #F8FAFC)",tone:"#3B82F6",tags:["塑料基材","强度/韧性","触感"],materials:["ABS","PC","POM","PEEK","TPU","尼龙"],steps:["按刚性、韧性、耐温和耐磨建立材料表","区分展示件、结构件和运动件需求","选择匹配的打印、CNC 或注塑路径","记录材料成本、可得性和表面处理兼容性"],outcome:"让学生先判断材料角色，再选择制造工艺。",sourceUrl:"https://profabx.com/prototype/material/polymers/peek/",localUrl:"/docs/courses/fab-course/doc/0manage/material.html"},{id:"metal-materials",category:"material",label:"材料",title:"金属材料族",subtitle:"强度、散热与真实工业质感",description:"围绕铝、铜、钛、不锈钢等金属基材，理解重量、强度、导热、导电和表面处理之间的取舍。",swatch:"linear-gradient(135deg, #111827, #94A3B8 46%, #B45309)",tone:"#94A3B8",tags:["铝合金","铜合金","钛合金"],materials:["铝合金","铜合金","钛合金","不锈钢"],steps:["按重量、强度、散热和成本建立选择标准","匹配 CNC、钣金、SLM 或铸造路径","预留阳极、拉丝、喷砂或电镀余量","用真实样板比对颜色、反光和触感"],outcome:"把金属 CMF 训练落实到结构和制造约束。",sourceUrl:"https://profabx.com/prototype/material/metal/al/",localUrl:"/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html"},{id:"composite-materials",category:"material",label:"材料",title:"纤维增强复合材料",subtitle:"轻量化、刚度与结构方向性",description:"以 PA-CF、PA-GF、ABS-GF 等复合材料建立轻量化原型中的强度方向、层纹、磨耗和加工风险判断。",swatch:"linear-gradient(135deg, #030712, #16A34A 45%, #334155)",tone:"#16A34A",tags:["PA-CF","PA-GF","轻量化"],materials:["PA-CF","PA-GF","ABS-GF","碳纤维纹理"],steps:["识别主受力方向与各向异性风险","选择连续纤维、短纤维或粉末烧结路径","处理喷嘴磨耗、收缩和表面粗糙度","通过夹具或实测验证刚度收益"],outcome:"让复合材料不只停留在外观纹理，而成为结构决策工具。",sourceUrl:"https://profabx.com/prototype/material/componsites/pacf/",localUrl:"/docs/courses/fab-course/doc/0manage/material.html"},{id:"sandtable",category:"workflow",label:"工作流",title:"数字沙盘原型",subtitle:"从概念陈列到交互展示",description:"面向课程展示、展厅模型和产品路演的综合原型路径，强调模型比例、模块拆分、灯光/交互与可维护结构。",swatch:"linear-gradient(135deg, #002FA7, #5E6AD2 58%, #F4B860)",tone:"#5E6AD2",tags:["展示模型","结构拆分","交互陈列"],materials:["亚克力","树脂","铝型材","灯带"],steps:["定义展示场景与观察距离","拆分外壳、底座、灯光与控制模块","建立比例模型并完成装配校验","输出维护清单与展示说明"],outcome:"形成可巡展的高完成度原型，而不是单次拍摄用样机。",sourceUrl:"https://profabx.com/prototype/sandtable/",localUrl:"/docs/courses/fab-course/doc/1projectmanage/Assessment1.html"},{id:"digital-fabrication",category:"workflow",label:"工作流",title:"探索数字制造",subtitle:"从设计文件到快速打样闭环",description:"将 CAD、材料选择、工艺约束、后处理与复盘文档串联成一个可重复的课程流程，适合 CMF 小组项目管理。",swatch:"linear-gradient(135deg, #111827, #2DD4BF 52%, #F59E0B)",tone:"#2DD4BF",tags:["FabLab","课程流程","复盘文档"],materials:["PLA","ABS","亚克力","木材"],steps:["建立需求与造型边界","选择低风险快速工艺完成第一版","通过 CMF 样板校正颜色、质感与结构","沉淀 BOM、工艺参数与失败样本"],outcome:"让学生把工具使用转化成可迁移的工程决策能力。",sourceUrl:"https://profabx.com/prototype/exploredigitalfabrication/",localUrl:"/docs/courses/fab-course/"},{id:"fdm",category:"additive",label:"增材",title:"FDM 熔融沉积",subtitle:"低成本结构验证与快速迭代",description:"适合课程早期体量、装配、握持和机构干涉验证。重点在层纹方向、支撑策略、壁厚和嵌件预留。",swatch:"linear-gradient(135deg, #3F51B5, #2563EB 55%, #D1D5DB)",tone:"#2563EB",tags:["结构草模","低成本","装配验证"],materials:["PLA","ABS","ASA","TPU","PA-CF"],steps:["按受力方向确定打印姿态","预留螺母、热熔铜柱与走线槽","用 0.2mm 层高完成首版验证","对关键面进行打磨、补土或喷漆"],outcome:"快速得到可握持、可装配、可测试的第一轮样机。",sourceUrl:"https://profabx.com/prototype/material/polymers/asa/",localUrl:"/docs/courses/fab-course/doc/3_3dprinter/2.FDM3Dprintingbackground.html"},{id:"lcd-dlp",category:"additive",label:"增材",title:"LCD / DLP 光固化",subtitle:"细节、透明件与视觉样件",description:"适合高精度外观件、小型结构、透明罩、CMF 质感样板。课程中重点训练支撑痕迹、清洗固化和表面处理。",swatch:"linear-gradient(135deg, #6366F1, #A78BFA 55%, #F8FAFC)",tone:"#A78BFA",tags:["精细表面","透明树脂","视觉样件"],materials:["标准树脂","透明树脂","韧性树脂"],steps:["拆分可见面与支撑面","设置排液孔和空腔壁厚","清洗、二次固化并修整支撑痕迹","通过喷涂或抛光形成最终质感"],outcome:"让设计意图在比例、边缘和表面细节上被准确表达。",sourceUrl:"https://profabx.com/prototype/manufacture/add/lcddlp/",localUrl:"/docs/courses/fab-course/doc/3_3dprinter/5.SLAbackground.html"},{id:"sls-mjf",category:"additive",label:"增材",title:"SLS / MJF 尼龙烧结",subtitle:"功能件、小批量与复杂结构",description:"适合卡扣、铰链、轻量化壳体和耐冲击结构。课程中用它连接外观样机与功能样机。",swatch:"linear-gradient(135deg, #111827, #64748B 58%, #E5E7EB)",tone:"#64748B",tags:["功能样机","尼龙","小批量"],materials:["PA12","PA11","TPU","PA-CF"],steps:["按功能面定义关键公差","为粉末清理预留孔位与开口","验证卡扣、铰链、耐冲击结构","染色、喷砂或浸渗提升外观一致性"],outcome:"把 CMF 样件推进到接近真实使用场景的功能验证。",sourceUrl:"https://profabx.com/prototype/material/polymers/pa/",localUrl:"/docs/courses/fab-course/doc/3_3dprinter/7.hpmjf.html"},{id:"cnc",category:"subtractive",label:"减材",title:"CNC 精密加工",subtitle:"金属质感与高精度结构",description:"适合铝合金外壳、旋钮、支架、散热件和高精度装配面。关注刀路可达性、倒角、纹理方向和后处理余量。",swatch:"linear-gradient(135deg, #111827, #94A3B8 52%, #D97706)",tone:"#94A3B8",tags:["铝合金","高精度","真实材质"],materials:["铝合金","铜合金","钛合金","POM","亚克力"],steps:["把外观面和基准面分离管理","约束内角半径和刀具可达性","预留阳极、喷砂或抛光余量","用装配件复核孔位和配合公差"],outcome:"建立学生对真实材料、加工限制与工业质感之间关系的判断力。",sourceUrl:"https://profabx.com/en/prototype/manufacture/substractive/cnc/",localUrl:"/docs/courses/fab-course/doc/8CNC_manufacture/cnctype.html"},{id:"sheet-metal",category:"forming",label:"成型",title:"钣金折弯",subtitle:"轻量结构与工业外壳",description:"适合底盘、支架、防护罩、电控盒和课程机器人框架。关键是折弯半径、展开图、孔边距和表面喷涂策略。",swatch:"linear-gradient(135deg, #1F2937, #71717A 60%, #4ADE80)",tone:"#71717A",tags:["支架","外壳","展开图"],materials:["冷轧板","镀锌板","铝板","不锈钢"],steps:["用折弯线定义结构逻辑","检查孔边距和干涉风险","输出展开图与折弯顺序","结合喷粉、拉丝或阳极完成 CMF"],outcome:"让原型从塑料打印件升级为更接近工业装配的结构件。",sourceUrl:"https://profabx.com/prototype/material/metal/al/",localUrl:"/docs/courses/fab-course/doc/2cad/fusion360-sheetmetal.html"},{id:"injection",category:"forming",label:"成型",title:"注塑与硅胶覆膜",subtitle:"量产思维与软硬复合手感",description:"适合讲解拔模、分型线、缩水、嵌件与软胶包覆。课程不只做样机，还要理解未来量产中的设计取舍。",swatch:"linear-gradient(135deg, #3F51B5, #14B8A6 55%, #F97316)",tone:"#14B8A6",tags:["量产判断","拔模","软硬复合"],materials:["ABS","PC","PP","TPU","硅胶","PU"],steps:["标注拔模方向与分型线","检查壁厚、筋位和缩水风险","用软胶区域定义触感与防滑性能","建立样机成本与模具成本对照"],outcome:"把 CMF 从视觉选择推进到结构、触感和制造经济性的综合决策。",sourceUrl:"https://profabx.com/prototype/material/polymers/tpu/",localUrl:"/docs/courses/fab-course/doc/9MOLD/mold.html"},{id:"surface-postprocess",category:"surface",label:"表面",title:"喷砂、抛光与拉丝",subtitle:"从粗糙样机到可展示样板",description:"统一管理表面粗糙度、反光、边缘倒角和触感。适合建立 CMF 样板册，让同一造型呈现多种质感。",swatch:"linear-gradient(135deg, #0F172A, #CBD5E1 48%, #F59E0B)",tone:"#CBD5E1",tags:["质感控制","样板册","边缘处理"],materials:["铝合金","不锈钢","树脂","亚克力"],steps:["记录基材、砂号、压力和处理时长","控制可见边的倒角一致性","对比哑光、半哑光与镜面效果","将样板编号并归档到课程材料库"],outcome:"让学生能用参数描述质感，而不是只说“高级”或“好看”。",sourceUrl:"https://profabx.com/prototype/postprocess/postprocess/",localUrl:"/docs/courses/fab-course/doc/3_3dprinter/8.postprocess.html"},{id:"conductive",category:"surface",label:"表面",title:"导电与功能涂层",subtitle:"CMF 与电子功能的交界",description:"适合把外观件、电磁屏蔽、触摸电极和结构件连接起来。课程中可作为材料、电子和产品体验的跨学科案例。",swatch:"linear-gradient(135deg, #020617, #C084FC 48%, #22C55E)",tone:"#C084FC",tags:["功能表面","触摸电极","屏蔽"],materials:["导电漆","铜箔","树脂件","塑料壳体"],steps:["区分装饰层与功能层","规划接地、触摸或屏蔽路径","用遮蔽和分区控制涂层边界","完成导通、附着力和耐磨测试"],outcome:"把 CMF 训练从外观审美扩展到功能材料应用。",sourceUrl:"https://profabx.com/prototype/postprocess/functional/conductive/",localUrl:"/docs/courses/fab-course/doc/4electric_design/basicknowledge.html"}];return F(()=>{const r=document.getElementById("cmf-filterbar"),s=document.getElementById("cmf-card-grid"),c=document.getElementById("cmf-detail"),m=document.getElementById("cmf-card-count");if(!r||!s||!c)return;let o="all",i=a[0].id;m&&(m.textContent=String(a.length));function d(){return o==="all"?a:a.filter(e=>e.category===o)}function u(){return a.find(e=>e.id===i)||d()[0]||a[0]}function b(){r.innerHTML=f.map(e=>`
      <button
        type="button"
        class="cmf-filter${e.id===o?" active":""}"
        data-filter="${e.id}"
      >${e.label}</button>
    `).join(""),r.querySelectorAll("[data-filter]").forEach(e=>{e.addEventListener("click",()=>{o=e.dataset.filter||"all";const t=d()[0];t&&(i=t.id),n()})})}function g(){const e=u();s.innerHTML=d().map(t=>`
      <article
        class="prototype-card${t.id===e.id?" active":""}"
        style="--tone: ${t.tone}"
        tabindex="0"
        data-card-id="${t.id}"
      >
        <div class="card-swatch" style="background: ${t.swatch}" aria-hidden="true"></div>
        <div class="card-head">
          <span class="card-label">${t.label}</span>
          <span class="card-mark" aria-hidden="true"></span>
        </div>
        <h2>${t.title}</h2>
        <p class="card-subtitle">${t.subtitle}</p>
        <p class="card-desc">${t.description}</p>
        <div class="card-tags">
          ${t.tags.map(l=>`<span>${l}</span>`).join("")}
        </div>
      </article>
    `).join(""),s.querySelectorAll("[data-card-id]").forEach(t=>{const l=()=>{i=t.dataset.cardId||i,n()};t.addEventListener("click",l),t.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),l())})})}function h(){const e=u();c.style.setProperty("--tone",e.tone),c.innerHTML=`
      <div class="detail-swatch" style="background: ${e.swatch}" aria-hidden="true"></div>
      <div class="detail-meta">
        <span>${e.label}</span>
        <span>${e.subtitle}</span>
      </div>
      <h2>${e.title}</h2>
      <p>${e.description}</p>

      <div class="detail-block">
        <h3>材料与关键词</h3>
        <div class="detail-chip-group">
          ${e.materials.map(t=>`<span>${t}</span>`).join("")}
        </div>
      </div>

      <div class="detail-block">
        <h3>课程执行路径</h3>
        <ol class="detail-steps">
          ${e.steps.map(t=>`<li>${t}</li>`).join("")}
        </ol>
      </div>

      <div class="detail-result">
        <span>输出目标</span>
        <p>${e.outcome}</p>
      </div>

      <div class="detail-actions">
        <a href="${e.sourceUrl}" target="_blank" rel="noopener noreferrer" class="detail-action primary">
          ProFabX 源页面
        </a>
        <a href="${e.localUrl}" class="detail-action">
          本地课程文档
        </a>
      </div>
    `}function n(){b(),g(),h()}n()}),(r,s)=>(y(),A("div",null,[...s[0]||(s[0]=[C("",1)])]))}});export{M as __pageData,E as default};
