# sophigo

# 0609

1. “加入我们“和/“课程/AI基础应用”的背景动效和首页动效一致，颜色对比对降低至40%
2. “加入我们”页面，删除“返回首页”按钮
3. fab 课程完成，目前在班级逻辑上有问题

# 0611
课程内容测试 AI


## v2 课程开发

使用AI native的思路去开发AI移动机器人的课程，针对于初中生，希望他们能理解当前大模型的工作原理，以及了解相关的软件和硬件，从而为后续深入的全栈开发做准备

基本资料

1. 参考NexMaker academy的课程内容（https://sophigo.com/docs/courses/fab-course/）和fabacademy的内容（fabacademy.org），进行软硬件全栈开发；
2. 同时配套AI navtive的思路（参考资料在https://www.deeplearning.ai/）去做开发移动机器人的开发；
3. 了解机器人原理和车辆工程的基本情况，从而做出一款让中学生能接受和理解的移动机器人课程，参考instructables相关资料；
4. 寻找github上和AI native，车辆，移动机器人相关的资料，包括课件、视频等，整理好相关资料
5. 我们有概况.pdf的字基础资料

我借助hermes（大模型用deepseek v4 pro）作为总指挥；claude（大模型用deepseek v4 pro），codex，antigravity，作为三个专家互相讨论。我们软件中设置的 goal 为
    * 根据概况.pdf中（2. 课程大纲/2.1 初中组：AI机器人产品体验营和2. 课程大纲/2.2 高中组：AI 具身智能产品工程营）和上述资料，最终形成我们课程的整体方案;
    * 将最后的内容输出到obsidian（/Users/wubo/Documents/2026/SophiGo/obsidiancourse），同时在obsidian内生成course.html。作为对外展示内容。
    * 课程需要满足未来新工科教育/快学课相关内容
    
    此处在hermes里如何部署，同时其他几个软件如何协调






# 0606

## v1
基于目前网页http://sophigo.com/的优化建议

1. 登陆选用Supabase Auth进行注册/登陆，建议使用邮箱，用户界面有简单的课程权限选项，文章评论权限
2. 注册登陆后的个人页面参考这个链接“https://katie0122.github.io/HUIYAO.github.io/”（对应的仓库代码为：https://github.com/Katie0122/HUIYAO.github.io）

3. SophiGo Platform v1.0.0 Alpha 放在网页最后
4. 首页sophigo的logo和字体扩大至1.5倍
5. “AI 时代的生存与创新工具|SophiGo 赋能工程师与创客，构建集硬件、算法与 CMF 极简美学于一体的智能产品开发与“新工科”数字化平台。”改为："AI时代的工程创新方法| 以产品经理思维定义真实需求，以系统决策驱动敏捷造物"

6. 删除：进入文档系统和浏览创新课程
7. 搜索框里面不写东西，, AIGC 智能搜索助你开发产品删除，搜索框加宽1.5倍，
8. 探索核心创新板块：Fab课程，AI应用基础，AI移动机器人，CMF应用；里面的 icon 动画和文字可以优化完善，目前动效可以，可以考虑优化成3-5s的动效；
9. 社区辅助设计工具箱精简实用的 Web 工具，加速您的快速原型验证与 CMF 设计落地，此处删除 CMF设计落地，里面四个模块改为 Sophicar交通工具生成器（网页上所有参数化设计车辆都改成新的），threejs生成器，stl分析仪（stl分析报价全部改成新的），Mods，抠图工具，（工具里的视频生成删除）
10. AI 算法与物理实体原型的深度融合这个部分展示i效果可以，但是需要“http://sophigo.com/docs/news/techanalysis/index.html”做内容核心表述：表述在AI native时代我们怎么做工程创新的，不要需要聊品牌和具体工具
11. 删除“安全可靠的无缝数据平台我们充分尊重开发者与合作伙伴的数据隐私。用户鉴权采用本地 JWT 加密存储与后端会话校验机制，不依赖任何三方明文通道，完美适配国内数据合规政策，为您提供闪电般快速的响应式访问体验。”
12. 页脚 删除开发文档，课程分类，工具箱
13. 关于我们改为 加入我们，加入我们页面 需要表述，我们是谁，我们做什么，希望你的加入这几类，参考内容和风格为“https://cocoyull.github.io/0415/about%20us.index.html”


## v2
1. 去除已授权，需授权；
2. 去除rapid prototyping，generative design ，hardware &control ，industry aesthetics
3. Fab课程的logo使用机械，电子，算法做融合创新的工程项目，以简笔画形式表示；
4. fab课程的介绍：系统学习工程创新的软硬件底层基础，以MIT FabLab全球课程fabacademy和全球网络社区为基础，系统学习how to make almost everything。提升参与者的全栈思维和产品经理思维，和相关技术开发水平。
5. 个人项目页面里的SOPHICAR和对应logo删除
6. 删除所有 “已授权”
7. AI 应用基础 (AI Basics)：聚焦 AI 工具基础应用与实际工作场景落地，帮助参训人员提升 AI 认知，掌握核心 AI 工具的初步使用方法，能够将 AI 技术应用于 IP 形象打造、数字人开发、电商数据抓取分析等工作场景，优化工作方式与业务流程；同时实现小功能、工作流的 Web 开发落地，最终能独立输出 AI 原生产品方案，推动团队在工作中合理运用 AI 技术，提升工作效率与创意落地能力。
8. AI 应用基础 (AI Basics)这里的gif可以参考obsidian 的网状结构，神经网络，节点不停的发散出去并在部分地方高亮（展示神经网络的逻辑）
9. AI 移动机器人 (AI Mobile Robots)：掌握基于 ROS2 与多轮差速/麦克纳姆轮底盘的软硬件集成。提供 Sophicar 硬件级车体仿真及底盘运动学控制算法。 改为 在移动机器人场景下，需求提出与定义，AI工具使用与工程化，辩证思考与决策，了解AI能力边界，文档复盘



# 0607

v1:


1. /courses/fab-course/的逻辑是概况介绍（参考https://www.nexmaker.com/，https://www.nexmaker.com/doc/Fab/FAB.html，https://www.nexmaker.com/doc/0manage/nexmaker-academy.html），tutorials（Project manage，CAD design， 3D printer，Electric design， Arduino application， Laser cutting， PCB manufacture， CNC manufacture，Mold， IOT and Interaction， Interface Application Programming，Material and tool，Business plan basic，AI vehicle），Courselist（班级+团队连接），lab manage，以上所有内容在网页上都是英文显示，前端页面是react等做动态交互，不需要太花哨（参考antigravity.google，不需要拉太长），文档对对应的vitepress
）




