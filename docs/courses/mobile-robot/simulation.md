# Sophicar 3D 底盘在线仿真

为了打破嵌入式学习必须依赖物理硬件的限制，本课程提供完整的 Web 端 3D 机器人底盘物理引擎与传感器仿真平台。无需硬件，即可在浏览器中一键运行和调试移动算法。

---

## 1. WebGL 3D 渲染引擎与 CAD 模型加载

仿真模块基于 **Three.js** 开发，加载精心优化的 Sophicar 3D 底盘模型。

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 创建场景、摄像机和光源
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// 加载小车 3D 模型
const loader = new GLTFLoader();
loader.load('/assets/models/sophicar.gltf', (gltf) => {
  const carModel = gltf.scene;
  scene.add(carModel);
  
  // 初始化物理参数与车轮节点
  initCarPhysics(carModel);
});
```

我们在浏览器渲染主循环中根据虚拟物理引擎的积分公式刷新小车位置与轮速姿态，呈现逼真的动力学效果。

---

## 2. 虚拟遥控器与交互控制环 (Virtual Joystick)

网页端包含一个玻璃拟态（Glassmorphism）样式的虚拟触控摇杆。

* **指令下发**: 触控摇杆偏移量被实时映射为 $X$ 轴平移速度 $v_x$、$Y$ 轴平移速度 $v_y$ 和自转速度 $\omega_z$。
* **物理反馈**: 速度通过 WebSockets 转发至本地控制服务器，或者直接输入到前端自带的轻量级差速/麦轮运动学反解模拟器，即时更新 3D 视口中小车的位移与轮胎旋转角度。

---

## 3. 仿真环境下的传感器模拟

为了让仿真能够服务于高层导航逻辑，我们为虚拟 Sophicar 装备了两个基础传感器模拟器：

### 3.1 2D 激光雷达扫描器 (Lidar Simulator)
* **实现原理**: 在小车几何中心位置，每隔固定夹角（如 $1^\circ$）发射一条三维射线（Raycaster）。
* **交点检测**: 射线与仿真场景中的障碍物墙面求交，计算交点距离。
* **数据格式**: 将所有射线的距离结果打包成标准的 ROS `sensor_msgs/msg/LaserScan` 数据包，渲染出激光束的绿色网状扫描线。

### 3.2 超声波测距传感器 (Ultrasonic Sensor Simulator)
* 模拟布置在车头左、中、右侧的三个红外/超声波探头。
* 当雷达射线检测到前方 $30\text{cm}$ 内有虚拟障碍物时，在仪表盘上亮起橙色/红色警示灯，触发单片机虚拟中断避障代码。

---

## 4. 实验课：CMF 工业表面工艺即时打样
在仿真器中，我们还集成了 CMF (Color, Material, Finish) 工艺选择器。您可以即时预览小车外壳在不同材料表面处理工艺下的质感：

* **阳极氧化 (Anodizing)**: 调整粗糙度（Roughness）和金属感（Metalness），模拟克莱因蓝氧化表面。
* **喷砂工艺 (Sandblasting)**: 调整高光贴图与法线噪点贴图，模拟 #120 / #180 不同目数喷砂颗粒在灯光下的散射质感。
