/**
 * 电力派单平台 - 知识库内容配置
 *
 * 编辑此文件可更新平台文档内容。
 * 按模块分类组织，便于维护和升级。
 */

// 颜色主题配置
export const COLORS = {
  primary: "#1B3A5C",
  secondary: "#2E7D32",
  accent: "#E65100",
  warn: "#F9A825",
  bg: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1A1A1A",
  muted: "#6B7B8D",
  border: "#E0E6ED",
  blue100: "#E3F2FD",
  green100: "#E8F5E9",
  orange100: "#FFF3E0",
  purple: "#5C3D99",
  purple100: "#F3E5F5",
};

// 导航标签页
export const tabs = [
  { id: "overview", label: "全景总览", icon: "🏗️" },
  { id: "flow", label: "业务流程", icon: "🔄" },
  { id: "roles", label: "角色体系", icon: "👥" },
  { id: "modules", label: "模块说明", icon: "📦" },
];

// 工单流程状态
export const flowSteps = [
  { status: "待提交", actor: "发起方", desc: "保存需求草稿", color: COLORS.muted, icon: "📝" },
  { status: "待审核", actor: "发起方", desc: "提交需求至平台", color: COLORS.warn, icon: "📤" },
  { status: "待派单", actor: "平台方", desc: "审核通过，准备分配", color: COLORS.accent, icon: "✅" },
  { status: "待接单", actor: "平台方", desc: "派单或发布抢单池", color: "#1976D2", icon: "📡" },
  { status: "进行中", actor: "接单方", desc: "确认接单，现场作业", color: COLORS.secondary, icon: "🔧" },
  { status: "待验收", actor: "接单方", desc: "提交完工报告", color: "#7B1FA2", icon: "📋" },
  { status: "待结算", actor: "发起方", desc: "确认验收通过", color: "#00838F", icon: "💰" },
  { status: "已完结", actor: "系统", desc: "结算完成，双方评价", color: COLORS.primary, icon: "🎉" },
];

// 角色定义
export const roles = [
  {
    name: "任务发起方",
    icon: "🏢",
    platform: "微信小程序",
    color: "#1565C0",
    features: [
      "服务品类选择与模版填写",
      "自定义需求（图片/视频/语音）",
      "GPS 地址定位 + 预约时间",
      "工单状态实时追踪",
      "在线验收与多维评价",
      "费用查看与在线支付"
    ]
  },
  {
    name: "平台运营方",
    icon: "🖥️",
    platform: "Web 管理后台",
    color: COLORS.accent,
    features: [
      "审核驾驶舱（含自动审核规则）",
      "智能派单引擎（推荐 Top3）",
      "服务商入驻审核与管理",
      "技师等级与违规管理",
      "运营数据看板 + 区域热力图",
      "品类/模版/定价配置中心"
    ]
  },
  {
    name: "服务接单方",
    icon: "👷",
    platform: "移动 App / 小程序",
    color: COLORS.secondary,
    features: [
      "推送通知 + 抢单大厅",
      "一键导航到作业现场",
      "GPS 签到 + 安全交底",
      "分步作业记录（拍照/录像）",
      "物料登记 + 完工报告",
      "收入明细 + 提现管理"
    ]
  },
];

// 模块分类与子模块
export const moduleCategories = [
  {
    category: "用户与权限",
    color: "#1565C0",
    icon: "👤",
    modules: [
      { name: "用户注册登录", desc: "微信授权、手机号绑定、JWT认证" },
      { name: "角色权限管理", desc: "RBAC权限控制、数据隔离、操作鉴权" },
      { name: "实名认证", desc: "身份证核验、资质证照上传、审核流程" },
      { name: "组织架构", desc: "服务商团队、多级管理员、部门划分" },
    ]
  },
  {
    category: "工单核心",
    color: COLORS.secondary,
    icon: "📋",
    modules: [
      { name: "需求提交", desc: "品类选择、模版填写、自定义描述、附件上传" },
      { name: "工单状态机", desc: "8节点流转、状态校验、操作日志" },
      { name: "审核管理", desc: "人工审核、自动规则引擎、驳回重提" },
      { name: "派单调度", desc: "智能匹配、指定派单、抢单池、负载均衡" },
    ]
  },
  {
    category: "现场作业",
    color: COLORS.accent,
    icon: "🔧",
    modules: [
      { name: "GPS签到", desc: "到场打卡、围栏校验、轨迹记录" },
      { name: "安全交底", desc: "电子交底单、风险告知、签名确认" },
      { name: "作业记录", desc: "分步拍照、视频录制、语音备注" },
      { name: "完工报告", desc: "结构化表单、前后对比、客户签字" },
    ]
  },
  {
    category: "物料管理",
    color: "#00838F",
    icon: "📦",
    modules: [
      { name: "物料登记", desc: "扫码录入、型号选择、数量统计" },
      { name: "库存台账", desc: "出入库记录、库存预警、盘点管理" },
      { name: "型号匹配", desc: "电气物料校验、规格适配、替代推荐" },
      { name: "成本核算", desc: "物料费用、工时费用、综合成本" },
    ]
  },
  {
    category: "结算支付",
    color: COLORS.purple,
    icon: "💰",
    modules: [
      { name: "费用计算", desc: "品类定价、工时费、物料费、附加费" },
      { name: "在线支付", desc: "微信支付、支付宝、预付/完工付/月结" },
      { name: "分账结算", desc: "平台佣金、技师收入、自动分账" },
      { name: "财务对账", desc: "账单明细、提现管理、发票开具" },
    ]
  },
  {
    category: "评价与质量",
    color: "#7B1FA2",
    icon: "⭐",
    modules: [
      { name: "多维评价", desc: "服务态度、专业能力、响应速度、现场管理" },
      { name: "技师等级", desc: "青铜/白银/黄金/钻石、积分升降级" },
      { name: "投诉处理", desc: "争议发起、平台调解、仲裁流程" },
      { name: "质量分析", desc: "好评率统计、问题分类、改进建议" },
    ]
  },
  {
    category: "消息通知",
    color: COLORS.warn,
    icon: "🔔",
    modules: [
      { name: "系统通知", desc: "工单状态变更、审核结果、超时提醒" },
      { name: "推送服务", desc: "微信模版消息、App推送、短信通知" },
      { name: "即时通讯", desc: "发起方与接单方在线沟通、客服会话" },
      { name: "消息中心", desc: "消息列表、已读未读、消息归档" },
    ]
  },
  {
    category: "数据与运营",
    color: COLORS.primary,
    icon: "📊",
    modules: [
      { name: "运营看板", desc: "工单量、完成率、响应时间、满意度" },
      { name: "区域分析", desc: "需求热力图、服务覆盖、资源调配" },
      { name: "财务报表", desc: "交易额、佣金收入、技师收入分布" },
      { name: "预警中心", desc: "异常指标监控、自动告警、升级通知" },
    ]
  },
  {
    category: "系统配置",
    color: COLORS.muted,
    icon: "⚙️",
    modules: [
      { name: "品类管理", desc: "服务品类树、多级分类、启用停用" },
      { name: "模版配置", desc: "需求模版、动态表单、字段管理" },
      { name: "定价规则", desc: "基础价格、区域系数、紧急加价" },
      { name: "审核规则", desc: "自动审核条件、派单策略、超时设置" },
    ]
  },
  {
    category: "安全合规",
    color: "#D32F2F",
    icon: "🛡️",
    modules: [
      { name: "资质核验", desc: "电工证、特种作业证在线验证" },
      { name: "操作票管理", desc: "停电操作票、工作票电子化审批" },
      { name: "审计日志", desc: "全操作留痕、≥5年归档、合规导出" },
      { name: "数据安全", desc: "敏感信息加密、传输加密、访问控制" },
    ]
  },
];

// 概览页核心指标
export const keyMetrics = [
  { label: "核心角色", value: "3端", color: COLORS.primary },
  { label: "工单状态", value: "8个", color: COLORS.secondary },
  { label: "功能模块", value: "40+", color: COLORS.accent },
  { label: "模块分类", value: "10类", color: COLORS.purple },
];

// 核心设计理念
export const coreValues = [
  { title: "需求标准化", desc: "预设模版 + 自定义表单，将碎片化需求结构化", icon: "📋", color: COLORS.primary },
  { title: "调度智能化", desc: "地理位置 × 技能标签 × 忙闲状态的智能匹配", icon: "🤖", color: COLORS.secondary },
  { title: "过程透明化", desc: "实时追踪工单状态，现场作业全程记录", icon: "👁️", color: COLORS.accent },
  { title: "质量可量化", desc: "多维评价 + 服务积分，持续提升服务质量", icon: "⭐", color: COLORS.purple },
];

// 电力行业差异化特性
export const industryFeatures = [
  "电工证/特种作业证在线核验",
  "停电操作票电子化审批",
  "安全交底单电子签名",
  "电气物料型号匹配校验",
  "合规审计链 ≥5年留痕",
  "电子围栏安全管控"
];

// 异常流程处理
export const exceptionFlows = [
  { title: "审核驳回", desc: "附理由 → 修改重提 → ≥3次人工介入", icon: "🔙" },
  { title: "超时未接", desc: "30min回收 → 推荐下批 → 连拒降权", icon: "⏰" },
  { title: "现场变更", desc: "拍照取证 → 变更申请 → 费用调整", icon: "🔄" },
  { title: "验收争议", desc: "平台调解 → 第三方复检 → 仲裁流程", icon: "⚖️" },
];

// 平台信息
export const platformInfo = {
  title: "电力派单平台 · 架构设计",
  subtitle: "电力功能维修与安装全链路数字化派单系统",
  version: "V1.0",
  icon: "⚡",
};
