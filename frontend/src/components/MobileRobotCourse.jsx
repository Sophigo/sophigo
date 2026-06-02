import React from 'react';
import { ArrowLeft, BookOpen, Cpu, Layers, Bot, Compass, Users, CheckCircle, GraduationCap, Wrench, ShieldAlert, Zap, ExternalLink } from 'lucide-react';

export default function MobileRobotCourse({ lang = 'zh', onBack }) {
  const t = {
    zh: {
      backBtn: "返回主页",
      courseTag: "Sophigo 专业实战课程",
      title: "AI 移动机器人软硬件集成课程",
      subtitle: "从电机控制、运动学建模到 ROS2 导航与 Web 3D 在线仿真，掌握软硬件一体化开发的核心链条。",
      
      // Target Audience Section
      audienceTitle: "适用群体",
      audienceSubtitle: "无论您是初学者还是专业开发人员，本课程都为您设计了匹配的知识成长路径。",
      audiences: [
        {
          icon: <GraduationCap size={28} />,
          title: "高校新工科专业学生",
          desc: "机器人工程、自动化、电子工程、计算机等专业学生。帮助打通底层硬件寄存器与高层操作系统（ROS2）之间的知识鸿沟，将理论算法完美呈现在物理实体上。",
          badges: ["算法验证", "毕设加分", "软硬兼修"]
        },
        {
          icon: <Cpu size={28} />,
          title: "嵌入式与物联网工程师",
          desc: "已具备基本单片机开发基础，但希望跨入高级机器人控制、多传感器融合和 SLAM 自动导航领域的工程师。快速进阶 ROS2 主流机器人技术框架。",
          badges: ["技术进阶", "掌握ROS2", "高薪就业"]
        },
        {
          icon: <Wrench size={28} />,
          title: "机器人创客与 DIY 极客",
          desc: "想要从零制造一台自己定制的多功能自动避障/巡检小车。我们提供完整的开源 PCB 线路图、3D 打印 CMF 外壳文件，以及网页仿真器环境，帮助创意落地。",
          badges: ["创意孵化", "开源硬件", "快速打样"]
        }
      ],

      // Syllabus Outline Section
      outlineTitle: "课程分类提纲与内容",
      outlineSubtitle: "体系化的内容设计，由浅入深，每个板块均可跳转查看对应的技术文档与实验细节。",
      viewDetails: "查看文档细节",
      modules: [
        {
          num: "01",
          tag: "Theory & Kinematics",
          title: "机器人运动学与动力学建模",
          desc: "深入学习移动底盘的物理结构和控制建模。我们将推导主流移动机器人的运动学正逆解矩阵，为高精度轨迹规划打下坚实的数学根基。",
          points: [
            "双轮差速底盘（Differential Drive）运动学推导",
            "麦克纳姆轮（Mecanum Wheels）全向底盘矢量矩阵正逆解",
            "机器人航向角速度（Yaw rate）与编码器反馈积分（Odometry）计算",
            "运动控制仿真：Pure Pursuit 纯追踪算法与 PID 路径跟踪"
          ],
          link: "/docs/courses/mobile-robot/theory.html"
        },
        {
          num: "02",
          tag: "Hardware & MCU",
          title: "微控制器控制链与硬件集成",
          desc: "动手搭建机器人大脑的神经元。我们从电机选型、H 桥闭环控制开始，一步步打通与算能 Sophigo Duo 开发板的硬件接线、中断输入与串行通信协议。",
          points: [
            "霍尔编码器正交脉冲输入与增量式 PID 闭环调速",
            "电机驱动 H 桥芯片原理及 PWM 信号调节",
            "Sophigo Duo 微处理器 GPIO、PWM、UART 接口分配与外围电路设计",
            "主控板通信协议：底盘驱动器与上位机 ROS 节点间的数据打包传输"
          ],
          link: "/docs/courses/mobile-robot/hardware.html"
        },
        {
          num: "03",
          tag: "ROS2 & Navigation",
          title: "ROS2 导航系统与传感器感知",
          desc: "为机器人插上智慧的翅膀。我们将部署新一代 ROS2 (Robot Operating System)，配置导航堆栈 (Nav2)，并接入激光雷达 (Lidar) 实现定位建图与自主避障。",
          points: [
            "ROS2 节点通信机制（Topics, Services, Actions）与 TF2 坐标变换",
            "URDF/Xacro 机器人车体物理模型描述文件构建",
            "激光雷达 Lidar 驱动适配与 Gmapping/Cartographer 2D SLAM 建图",
            "Nav2 导航堆栈参数调优与全局/局部路径规划器（DWA / TEB）配置"
          ],
          link: "/docs/courses/mobile-robot/ros2.html"
        },
        {
          num: "04",
          tag: "3D Web Simulation",
          title: "Sophicar 3D 在线仿真与联合调试",
          desc: "云端一体化实战。Sophigo 平台内置了基于 WebGL (Three.js) 的 3D 底盘虚拟调试环境。您可以在没有实体小车的情况下，直接利用网页终端仿真控制指令。",
          points: [
            "在 Web 浏览器中直接加载 Sophicar 3D CAD 精准车身模型",
            "虚拟遥控器驱动车体运动，观察 3D 轨迹及虚拟声呐/雷达扫描特征",
            "基于 WebSockets 或 API 模拟真实的底盘回传数据包，闭环校验控制程序",
            "CMF 美学打样：在仿真器中即时调整车身氧化喷砂表面反射效果"
          ],
          link: "/docs/courses/mobile-robot/simulation.html"
        }
      ],

      // Stats Banner
      statsTitle: "为什么要选择这门课程？",
      stats: [
        { value: "100%", label: "软硬结合开源方案" },
        { value: "4 个", label: "核心系统实验" },
        { value: "No.1", label: "集成 Web 3D 仿真环境" },
        { value: "24/7", label: "AI 智能问答答疑辅助" }
      ]
    },
    en: {
      backBtn: "Back to Home",
      courseTag: "Sophigo Practical Course",
      title: "AI Mobile Robot Hardware-Software Course",
      subtitle: "From motor control, kinematics modeling, to ROS2 navigation and Web 3D simulation. Master the entire robotics integration chain.",
      
      // Target Audience Section
      audienceTitle: "Target Audience",
      audienceSubtitle: "Whether you are a beginner or a professional developer, this course is designed for your career and knowledge growth.",
      audiences: [
        {
          icon: <GraduationCap size={28} />,
          title: "Robotics & Engineering Students",
          desc: "For college majors like Robotics, Automation, EE, and Computer Science. Bridge the gap between low-level hardware registers and high-level OS like ROS2, bringing formulas to life on physical chassis.",
          badges: ["Algorithm Test", "Thesis Boost", "Full-Stack Hardware"]
        },
        {
          icon: <Cpu size={28} />,
          title: "Embedded & IoT Engineers",
          desc: "For developers with basic MCU experience who want to leap into advanced robotics control, multi-sensor fusion, and SLAM navigation. Step into the professional ROS2 architecture.",
          badges: ["Tech Upgrade", "Master ROS2", "Career Growth"]
        },
        {
          icon: <Wrench size={28} />,
          title: "Makers & DIY Geeks",
          desc: "For creators who want to build a custom autonomous navigation car from scratch. We open-source all PCB schematics, CMF enclosure files, and provide a web simulator to build your dream.",
          badges: ["Prototype Incubator", "Open Hardware", "Quick Mockup"]
        }
      ],

      // Syllabus Outline Section
      outlineTitle: "Course Outline & Contents",
      outlineSubtitle: "Structured learning syllabus. Click any module's details button to view technical documents and labs in VitePress.",
      viewDetails: "View Doc Details",
      modules: [
        {
          num: "01",
          tag: "Theory & Kinematics",
          title: "Robot Kinematics & Dynamic Modeling",
          desc: "Deep dive into mobile chassis physics and control modeling. Derive forward/inverse kinematics matrices to establish solid mathematical foundations for precision routing.",
          points: [
            "Kinematics derivation of dual-wheel Differential Drive chassis",
            "Mecanum Wheel vector kinematics and inverse matrix solutions",
            "Odometry accumulation using encoder feedback & Yaw angular rate",
            "Motion Control: Pure Pursuit and PID trajectory tracking algorithms"
          ],
          link: "/docs/courses/mobile-robot/theory.html"
        },
        {
          num: "02",
          tag: "Hardware & MCU",
          title: "Microcontroller Control & Hardware Integration",
          desc: "Construct the neural network of your robot chassis. Start from motor driver setups and PID velocity loops, linking them with Sophigo Duo board pinouts, interrupts, and serial communication.",
          points: [
            "Hall encoder quadrature signal decoding and incremental PID loop control",
            "Motor driver H-bridge theory and PWM speed modulation",
            "Sophigo Duo pin mapping (GPIO, PWM, UART) and peripheral circuit design",
            "Board communication protocol: Data serialization between chassis and ROS node"
          ],
          link: "/docs/courses/mobile-robot/hardware.html"
        },
        {
          num: "03",
          tag: "ROS2 & Navigation",
          title: "ROS2 Navigation Stack & Perception Systems",
          desc: "Give your robot intelligence. Deploy ROS2 (Robot Operating System), configure the Nav2 stack, and integrate Lidar sensors for simultaneous localization, mapping, and obstacle avoidance.",
          points: [
            "ROS2 node architecture (Topics, Services, Actions) and TF2 coordinates",
            "Building URDF/Xacro physical robot descriptions for simulation/viz",
            "Lidar sensor driver configurations and Gmapping/Cartographer SLAM",
            "Nav2 tuning: Global/Local path planners (DWA / TEB) parameter config"
          ],
          link: "/docs/courses/mobile-robot/ros2.html"
        },
        {
          num: "04",
          tag: "3D Web Simulation",
          title: "Sophicar 3D Online Web Simulation",
          desc: "Seamless cloud-hardware ecosystem. Sophigo incorporates a WebGL (Three.js) 3D simulation environment. Program and test your steering algorithms in your browser without hardware.",
          points: [
            "Load accurate Sophicar 3D CAD model directly inside standard browsers",
            "Interact with virtual joystick to inspect trajectories and simulated radar scans",
            "Simulate serial interface inputs/outputs via WebSockets for closed-loop software validation",
            "CMF aesthetic preview: adjust metal anodizing and sandblasting surface roughness dynamically"
          ],
          link: "/docs/courses/mobile-robot/simulation.html"
        }
      ],

      // Stats Banner
      statsTitle: "Why Choose This Course?",
      stats: [
        { value: "100%", label: "Open-source Scheme" },
        { value: "4 Core", label: "Hands-on Labs" },
        { value: "No.1", label: "Integrated Web 3D Simulation" },
        { value: "24/7", label: "DeepSeek AI Support" }
      ]
    }
  }[lang] || t.zh;

  return (
    <div style={containerStyle}>
      <div className="container-custom">
        
        {/* Back navigation */}
        <button 
          onClick={onBack}
          style={backBtnStyle}
          className="btn-secondary"
        >
          <ArrowLeft size={16} />
          {t.backBtn}
        </button>

        {/* Hero Area */}
        <div style={heroWrapperStyle}>
          <span style={tagStyle}>
            <Zap size={12} style={{ color: 'var(--klein-blue)' }} />
            {t.courseTag}
          </span>
          <h1 className="title-hero text-gradient-blue" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            {t.title}
          </h1>
          <p className="description" style={{ marginInline: 'auto', maxWidth: '750px', fontSize: '1.15rem' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div style={statsRowStyle}>
          {t.stats.map((stat, idx) => (
            <div key={idx} className="glassmorphism-card" style={statCardStyle}>
              <div style={statValueStyle}>{stat.value}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section: Target Audience */}
        <section style={{ marginBlock: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={sectionTitleStyle}>{t.audienceTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.audienceSubtitle}</p>
          </div>

          <div className="grid-featured" style={{ gap: '2rem' }}>
            {t.audiences.map((aud, idx) => (
              <div key={idx} className="grid-col-4 glassmorphism-card" style={audienceCardStyle}>
                <div style={iconWrapperStyle}>{aud.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBlock: '1.25rem 0.75rem' }}>
                  {aud.title}
                </h3>
                <p style={audienceDescStyle}>{aud.desc}</p>
                <div style={badgesWrapperStyle}>
                  {aud.badges.map((badge, bIdx) => (
                    <span key={bIdx} style={badgeStyle}>{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Course Syllabus Outline */}
        <section style={{ marginBlock: '5rem 8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={sectionTitleStyle}>{t.outlineTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.outlineSubtitle}</p>
          </div>

          <div style={timelineWrapperStyle}>
            {t.modules.map((mod, idx) => (
              <div key={idx} className="glassmorphism-card" style={timelineCardStyle}>
                
                {/* Visual marker */}
                <div style={numberCircleStyle}>
                  {mod.num}
                </div>

                {/* Left content detail */}
                <div style={moduleIntroStyle}>
                  <span style={moduleTagStyle}>{mod.tag}</span>
                  <h3 style={moduleTitleStyle}>{mod.title}</h3>
                  <p style={moduleDescStyle}>{mod.desc}</p>
                  
                  {/* Action Link to Vitepress */}
                  <a 
                    href={mod.link}
                    style={detailsLinkStyle}
                    className="btn-cta"
                  >
                    <span>{t.viewDetails}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Right bullet lists */}
                <div style={modulePointsStyle}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {mod.points.map((pt, pIdx) => (
                      <li key={pIdx} style={pointItemStyle}>
                        <CheckCircle size={16} style={{ color: 'var(--klein-blue)', flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// Styling Constants (Inline CSS for flexibility and complete control matching index.css styles)

const containerStyle = {
  paddingTop: '3rem',
  paddingBottom: '4rem',
  minHeight: '80vh',
  position: 'relative',
  zIndex: 5
};

const backBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1.25rem',
  fontSize: '0.85rem',
  borderRadius: '20px',
  cursor: 'pointer',
  marginBottom: '2rem'
};

const heroWrapperStyle = {
  textAlign: 'center',
  maxWidth: '900px',
  marginInline: 'auto',
  marginBottom: '3rem'
};

const tagStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  backgroundColor: 'var(--klein-blue-glow)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-color)',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.35rem 0.85rem',
  borderRadius: '9999px',
  backdropFilter: 'blur(8px)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const statsRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1000px',
  margin: '0 auto 4rem',
  width: '100%'
};

const statCardStyle = {
  padding: '1.5rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  textAlign: 'center',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
};

const statValueStyle = {
  fontSize: '1.75rem',
  fontWeight: '700',
  color: 'var(--klein-blue)',
  marginBottom: '0.25rem'
};

const statLabelStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '0.75rem',
  letterSpacing: '-0.02em'
};

const audienceCardStyle = {
  padding: '2.25rem 2rem',
  borderRadius: '20px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
  height: '100%'
};

const iconWrapperStyle = {
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  backgroundColor: 'var(--klein-blue-glow)',
  color: 'var(--klein-blue)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const audienceDescStyle = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  flexGrow: 1
};

const badgesWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: 'auto'
};

const badgeStyle = {
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '0.25rem 0.65rem',
  borderRadius: '6px',
  backgroundColor: 'var(--bg-secondary)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-secondary)'
};

const timelineWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  position: 'relative'
};

const timelineCardStyle = {
  padding: '2.5rem',
  borderRadius: '24px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  gap: '2.5rem',
  alignItems: 'stretch',
  position: 'relative',
  flexWrap: 'wrap',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.01)'
};

const numberCircleStyle = {
  position: 'absolute',
  top: '-16px',
  left: '2.5rem',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--text-primary)',
  color: 'var(--bg-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '0.9rem',
  border: '4px solid var(--bg-primary)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
};

const moduleIntroStyle = {
  flex: '1 1 380px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const moduleTagStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: 'var(--klein-blue)',
  letterSpacing: '0.1em',
  marginBottom: '0.5rem'
};

const moduleTitleStyle = {
  fontSize: '1.35rem',
  fontWeight: '600',
  marginBottom: '1rem',
  lineHeight: '1.3'
};

const moduleDescStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: '1.75rem'
};

const detailsLinkStyle = {
  padding: '0.55rem 1.5rem',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '500',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  marginTop: 'auto'
};

const modulePointsStyle = {
  flex: '1 1 320px',
  backgroundColor: 'rgba(0,0,0,0.02)',
  padding: '1.75rem 2rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const pointItemStyle = {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'flex-start'
};
