# ROS2 导航与感知系统

在现代移动机器人架构中，微控制器（单片机）负责底盘的基础电机速度环。高层的决策、环境感知与定位导航则由运行于智能网关/上位机（如 Linux/树莓派）上的 ROS2 (Robot Operating System) 协同完成。

---

## 1. ROS 2 底盘驱动节点设计

上位机通过串口（UART）以固定频率读取单片机上报的传感器数据，并下发控制指令。以下是 ROS2 Python 底盘通信节点的简化实现：

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
import serial
import struct

class ChassisDriverNode(Node):
    def __init__(self):
        super().__init__('chassis_driver_node')
        
        # 订阅上位机输出的目标速度 Twist 消息 (/cmd_vel)
        self.subscription = self.create_subscription(
            Twist,
            '/cmd_vel',
            self.cmd_vel_callback,
            10
        )
        
        # 初始化串口
        self.ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=0.1)
        self.get_logger().info('串口底盘驱动节点已成功启动！')

    def cmd_vel_callback(self, msg):
        vx = msg.linear.x    # 前进线速度 (m/s)
        vy = msg.linear.y    # 麦轮横移线速度 (m/s)
        wz = msg.angular.z   # 绕Z轴角速度 (rad/s)
        
        # 按照特定协议打包数据包发送给单片机
        # 帧头 (0xAA, 0x55) + 3个float速度值 + 校验和
        data = struct.pack('<BBfffB', 0xAA, 0x55, vx, vy, wz, 0xFF)
        self.ser.write(data)
        
def main(args=None):
    rclpy.init(args=args)
    node = ChassisDriverNode()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

---

## 2. TF2 坐标变换与传感器链 (Coordinate Frames)

在 ROS2 导航堆栈中，要实现机器人的自定位，系统必须能够随时转换以下几个核心物理坐标系之间的相互姿态关系：

* **`map` (地图坐标系)**: 全局静止坐标系，机器人的自主定位算法（如 SLAM）依靠传感器估计它在此坐标系下的真实轨迹。
* **`odom` (里程计坐标系)**: 相对坐标系，由底盘车轮编码器积分计算出累加位移，短期内平滑但存在长期漂移。
* **`base_link` (车体几何中心)**: 与小车刚性连接，原点一般位于两驱动轮的轴线中心。
* **`laser_frame` (雷达坐标系)**: 雷达物理安装的位置，需要指定它与 `base_link` 的 $X, Y, Z$ 相对偏移量（通过静态变换发布器 `static_transform_publisher` 广播）。

---

## 3. 激光雷达 SLAM 建图与 Nav2 自主导航

本课程中我们使用高性能的 2D 激光雷达。

### 3.1 Cartographer SLAM 建图步骤
1. 上位机运行雷达驱动，向 `/scan` 话题发布雷达点云（`sensor_msgs/msg/LaserScan`）。
2. 底盘驱动节点发布 `odom -> base_link` 变换。
3. 启动 `cartographer_node`，它会同时订阅雷达和里程计数据，估计出 `map -> odom` 变换，并发布实时占据网格地图（`nav_msgs/msg/OccupancyGrid`）。
4. 运行 `map_saver` 导出保存地图文件（`map.yaml` 和 `map.pgm`）。

### 3.2 Nav2 导航堆栈结构
```
              +-------------------------+
              |      Goal Command       |
              +-------------------------+
                           |
                           v
              +-------------------------+
              |     Global Planner      |  (如 NavFn, Smac Planner - 规划远距离粗略路径)
              +-------------------------+
                           |
                           v
              +-------------------------+
              |      Local Planner      |  (如 DWA, TEB - 结合动态障碍物计算实时速度指令)
              +-------------------------+
                           | /cmd_vel (Twist)
                           v
              +-------------------------+
              |      Chassis Driver     |  (下发给 Duo / 单片机执行)
              +-------------------------+
```
通过配置代价地图（Costmap），可以精确设定膨胀半径（Inflation Radius），确保小车底盘物理边缘与墙面保持安全间距，杜绝刮擦。
