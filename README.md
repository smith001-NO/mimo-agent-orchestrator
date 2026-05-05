# NebulaBot: MiMo Agent Orchestrator 🌌

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-success.svg)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20|%20CSS3%20|%20Vanilla%20JS-orange.svg)

**NebulaBot: MiMo Agent Orchestrator** 是一款专为管理、监控和可视化大模型（特别是 **Xiaomi MiMo 系列**）多智能体协作流程而设计的纯前端控制台。

该项目核心解决了在**长上下文推理**和**多 Agent 协作**场景下，开发者难以直观监控数据流、状态流转以及调试 Agent 交互过程的痛点。

---

## ✨ 核心特性 (Features)

- 🧠 **多 Agent 协作可视化**：动态呈现 Planner（任务拆解）、Coder（代码生成）与 Reviewer（代码审查）等角色的流转状态。
- 📊 **实时指标监控**：毫秒级模拟呈现全局 Token 消耗统计与系统推理平均延迟 (Latency)。
- 💻 **沉浸式执行日志**：内建极客风终端面板，实时打印系统调度与各个 Agent 的思考与执行过程。
- ⚡ **极致性能 (Flat Design)**：采用零依赖原生技术栈 (HTML/CSS/JS)，并经过深度渲染优化，支持在无硬件显卡加速的虚拟机环境中 60FPS 顺滑运行。
- 🔄 **模块化多视图**：包含总览 (Dashboard)、模型集群配置、工作流画布编排与 OpenClaw 网关设置等完整商业级后台视图。

---

## 🛠️ 技术栈 (Tech Stack)

- **结构**：语义化 HTML5
- **样式**：原生 CSS3 (包含 Flat Design、CSS Variables 动态主题机制)
- **逻辑**：Vanilla JavaScript (无任何臃肿的前端框架)
- **图标**：FontAwesome 6

---

## 🚀 快速启动 (Getting Started)

由于本项目采用极简原生架构，无需进行复杂的 `npm install`。只需一个简单的 HTTP 服务器即可启动：

### 1. 克隆仓库
```bash
git clone git@github.com-smith001:smith001-NO/mimo-agent-orchestrator.git
cd mimo-agent-orchestrator
```

### 2. 启动本地服务
您可以使用 Python 自带的 HTTP 服务模块启动项目：
```bash
# 启动在 13146 端口
python3 -m http.server 13146
```

### 3. 访问控制台
打开浏览器，访问：[http://localhost:13146](http://localhost:13146)

---

## 🔗 关于 OpenClaw 联动
此控制台专为对接 **OpenClaw Gateway** 设计。目前项目内置了模拟 WebSocket 数据流演示（点击“启动推理流”即可预览）。未来版本将完全开放 WebSocket 接口以接入真实的 MiMo 推理网关。

---
*Built for Xiaomi MiMo Open Platform Evaluation.*
