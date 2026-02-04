# 储能派单平台架构设计文档

储能派单平台的交互式架构设计文档站点。

## 在线访问

`https://powerc.oubeeda.com/`

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 更新知识库内容

所有内容都存储在一个文件中，便于维护：

**`src/data/content.js`**

### 可更新的内容：

| 配置项 | 说明 |
|--------|------|
| `platformInfo` | 平台标题、副标题、版本号 |
| `tabs` | 导航标签页 |
| `flowSteps` | 工单流程状态节点 |
| `roles` | 角色定义及功能列表 |
| `moduleCategories` | 模块分类及子模块 |
| `keyMetrics` | 概览页核心指标 |
| `coreValues` | 核心设计理念 |
| `industryFeatures` | 储能行业差异化特性 |
| `exceptionFlows` | 异常流程处理 |
| `COLORS` | 颜色主题配置 |

### 示例：添加新模块

```javascript
// 在 src/data/content.js 中找到 moduleCategories 数组
// 添加新分类：
{
  category: "新分类名称",
  color: "#1565C0",
  icon: "🆕",
  modules: [
    { name: "模块名称", desc: "模块描述说明" },
    // 添加更多模块...
  ]
}
```

### 示例：更新工单流程

```javascript
// 在 src/data/content.js 中找到 flowSteps 数组
// 修改或添加流程节点：
{
  status: "状态名称",
  actor: "操作角色",
  desc: "状态描述",
  color: COLORS.primary,
  icon: "📝"
}
```

## 部署到 GitHub Pages

### 自动部署（推荐）

推送到 `main` 分支时会自动部署到 GitHub Pages。

1. 在仓库设置中启用 GitHub Pages：
   - 进入 Settings > Pages
   - Source 选择：GitHub Actions

2. 推送更改：
```bash
git add .
git commit -m "更新文档内容"
git push origin main
```

### 手动部署

```bash
npm run build
npm run deploy
```

## 项目结构

```
power-dispatch-platform/
├── src/
│   ├── data/
│   │   └── content.js    # 所有可编辑的内容
│   ├── App.jsx           # 主组件
│   └── main.jsx          # 入口文件
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js        # Vite 配置
└── package.json
```

## 自定义配置

### 修改颜色主题

编辑 `src/data/content.js` 中的 `COLORS` 对象：

```javascript
export const COLORS = {
  primary: "#1B3A5C",    // 主色调
  secondary: "#2E7D32",  // 次要颜色
  accent: "#E65100",     // 强调色
  // ... 更多颜色
};
```

### 修改部署路径

当前使用相对路径 `./`，适配自定义域名部署。

如需部署到 GitHub Pages 子目录，更新 `vite.config.js`：

```javascript
export default defineConfig({
  base: '/你的仓库名称/',
  // ...
})
```

## 许可证

MIT
