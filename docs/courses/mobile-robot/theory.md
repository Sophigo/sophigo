# 机器人运动学与动力学建模

本章节详细阐述现代移动机器人（如双轮差速、麦克纳姆轮）的物理结构抽象与运动控制模型。

---

## 1. 双轮差速底盘（Differential Drive）

双轮差速底盘是最常见的移动机器人构型之一，依靠两侧主动轮的转速差实现前进、后退和转向。

### 1.1 几何模型与参数定义
* $2L$: 两主动轮轴距 (Wheelbase)
* $R$: 车轮半径 (Wheel Radius)
* $\omega_L, \omega_R$: 左、右轮的旋转角速度 (rad/s)
* $v_L, v_R$: 左、右轮相对于地面的切向线速度 ($v = \omega \cdot R$)
* $[x, y, \theta]^T$: 机器人在全局坐标系下的位姿 (Pose)

### 1.2 运动学正解 (Forward Kinematics)
给定左右轮线速度 $v_L, v_R$，求解机器人的整体线速度 $v$ 和绕几何中心旋转的角速度 $\omega$：

$$
v = \frac{v_R + v_L}{2}
$$

$$
\omega = \frac{v_R - v_L}{2L}
$$

机器人在全局坐标系下的状态空间方程（里程计积分基础）为：

$$
\dot{x} = v \cos(\theta) = \frac{R(\omega_R + \omega_L)}{2} \cos(\theta)
$$

$$
\dot{y} = v \sin(\theta) = \frac{R(\omega_R + \omega_L)}{2} \sin(\theta)
$$

$$
\dot{\theta} = \omega = \frac{R(\omega_R - \omega_L)}{2L}
$$

---

## 2. 麦克纳姆轮底盘（Mecanum Wheels）

麦克纳姆轮底盘采用 4 个外周呈 $45^\circ$ 倾斜辊子的特殊车轮，可实现**全向平移**（Omnidirectional Movement），即无需改变车体朝向即可在平面内任意方向平移。

```
       Front
    [ Wheel 1 ]   [ Wheel 2 ]
       (+\)          (+/)
          \         /
           \       /
            =======
            |     |
            =======
           /       \
          /         \
       (-\)          (-/)
    [ Wheel 3 ]   [ Wheel 4 ]
        Rear
```

### 2.1 运动学逆解 (Inverse Kinematics)
在控制链中，我们需要根据目标车体速度 $[v_x, v_y, \omega_z]^T$ 计算 4 个电机的切向线速度：

$$
v_1 = v_x - v_y - (a + b)\omega_z
$$

$$
v_2 = v_x + v_y + (a + b)\omega_z
$$

$$
v_3 = v_x + v_y - (a + b)\omega_z
$$

$$
v_4 = v_x - v_y + (a + b)\omega_z
$$

* $a$: 几何中心到轮子横向轴线的距离
* $b$: 几何中心到轮子纵向轴线的距离

---

## 3. 实验课：底盘轨迹跟踪 (Pure Pursuit 纯追踪)

纯追踪（Pure Pursuit）算法是一种基于几何追踪的经典横向控制算法。其核心是选择小车前方距离为 $L_d$ 的路径点作为目标点 $G(x_g, y_g)$，计算控制舵角或角速度 $\omega$ 使小车沿着半径为 $R$ 的圆弧驶向目标点。

### 3.1 核心控制律
假设小车当前位置在坐标原点，航向角为 $0$。目标点在小车局部坐标系下为 $(e_x, e_y)$：

$$
\omega = \frac{2v \cdot e_y}{L_d^2}
$$

通过动态调整前视距离 $L_d$（如 $L_d = k \cdot v + L_{d0}$），可以在低速时保持高精度，在高速时保证轨迹平滑。

---

## 4. 划词批注互动区
如果您对本节的公式推导、或麦轮辊子受力分析有任何疑问，请直接**用鼠标划选目标文字**，即可触发 Hypothesis 侧栏或本地批注面板。
请先在主站登录，登录状态会自动同步至此！
