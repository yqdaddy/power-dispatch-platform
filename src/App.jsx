import { useState } from "react";
import {
  COLORS,
  tabs,
  flowSteps,
  roles,
  moduleCategories,
  keyMetrics,
  coreValues,
  industryFeatures,
  exceptionFlows,
  platformInfo,
} from "./data/content.js";

const StatusBadge = ({ label, color }) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 12,
      fontSize: 11,
      fontWeight: 600,
      background: color + "18",
      color,
      border: `1px solid ${color}40`,
      letterSpacing: 0.3,
    }}
  >
    {label}
  </span>
);

const SectionTitle = ({ icon, title, subtitle }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: COLORS.primary, letterSpacing: -0.5 }}>{title}</h2>
    </div>
    {subtitle && <p style={{ margin: 0, fontSize: 13, color: COLORS.muted, paddingLeft: 30 }}>{subtitle}</p>}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expandedRole, setExpandedRole] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'SF Pro Display', -apple-system, 'Segoe UI', sans-serif",
        background: COLORS.bg,
        minHeight: "100vh",
        color: COLORS.text,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary} 0%, #2a5d8f 100%)`,
          padding: "28px 32px 20px",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>{platformInfo.icon}</span>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>{platformInfo.title}</h1>
        </div>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.75, paddingLeft: 40 }}>{platformInfo.subtitle}</p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "12px 24px 0",
          background: "#fff",
          borderBottom: `1px solid ${COLORS.border}`,
          overflowX: "auto",
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderBottom: activeTab === t.id ? `3px solid ${COLORS.primary}` : "3px solid transparent",
              background: "none",
              cursor: "pointer",
              fontSize: 13.5,
              fontWeight: activeTab === t.id ? 700 : 500,
              color: activeTab === t.id ? COLORS.primary : COLORS.muted,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", maxWidth: 1000, margin: "0 auto" }}>
        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <SectionTitle icon="🏗️" title="平台全景总览" subtitle="三端协同、全链路数字化的电力维修安装派单平台" />

            {/* Key metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {keyMetrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "18px 16px",
                    textAlign: "center",
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ fontSize: 26, fontWeight: 800, color: m.color, letterSpacing: -1 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 4 }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Core value */}
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: 24,
                border: `1px solid ${COLORS.border}`,
                marginBottom: 20,
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: COLORS.primary }}>
                🎯 核心设计理念
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {coreValues.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      padding: 14,
                      borderRadius: 10,
                      background: v.color + "08",
                      border: `1px solid ${v.color}15`,
                    }}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{v.icon}</span>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: v.color, marginBottom: 3 }}>{v.title}</div>
                      <div style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.5 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiation */}
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.secondary}08, ${COLORS.secondary}15)`,
                borderRadius: 14,
                padding: 24,
                border: `1px solid ${COLORS.secondary}25`,
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 700, color: COLORS.secondary }}>
                💡 电力行业差异化设计
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {industryFeatures.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: COLORS.text }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        background: COLORS.secondary,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FLOW */}
        {activeTab === "flow" && (
          <div>
            <SectionTitle icon="🔄" title="工单全生命周期" subtitle="8 个核心状态节点，覆盖正常流转与异常处理" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {flowSteps.map((step, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "#fff",
                    borderRadius: 12,
                    padding: "14px 20px",
                    border: `1px solid ${hoveredStep === i ? step.color + "60" : COLORS.border}`,
                    boxShadow: hoveredStep === i ? `0 4px 16px ${step.color}18` : "0 1px 3px rgba(0,0,0,0.03)",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      background: step.color,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{step.icon}</span>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
                      <span style={{ fontSize: 14.5, fontWeight: 700, color: step.color }}>{step.status}</span>
                      <StatusBadge label={step.actor} color={step.color} />
                    </div>
                    <div style={{ fontSize: 12.5, color: COLORS.muted }}>{step.desc}</div>
                  </div>

                  {/* Arrow */}
                  {i < flowSteps.length - 1 && (
                    <span style={{ fontSize: 16, color: COLORS.muted, flexShrink: 0 }}>→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Exception flows */}
            <div style={{ marginTop: 28 }}>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: COLORS.accent,
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>⚠️</span>异常流程处理
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {exceptionFlows.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      background: COLORS.orange100,
                      borderRadius: 10,
                      padding: "14px 16px",
                      border: `1px solid ${COLORS.accent}20`,
                    }}
                  >
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.accent, marginBottom: 4 }}>
                      {ex.icon} {ex.title}
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.5 }}>{ex.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ROLES */}
        {activeTab === "roles" && (
          <div>
            <SectionTitle icon="👥" title="三端角色体系" subtitle="任务发起方 × 平台运营方 × 服务接单方" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {roles.map((role, i) => (
                <div
                  key={i}
                  onClick={() => setExpandedRole(expandedRole === i ? null : i)}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: `1px solid ${COLORS.border}`,
                    cursor: "pointer",
                    boxShadow: expandedRole === i ? `0 4px 20px ${role.color}15` : "0 1px 3px rgba(0,0,0,0.04)",
                    transition: "all 0.3s",
                  }}
                >
                  <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: role.color + "12",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 26,
                      }}
                    >
                      {role.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: role.color }}>{role.name}</div>
                      <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{role.platform}</div>
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        color: COLORS.muted,
                        transform: expandedRole === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      ▾
                    </span>
                  </div>

                  {expandedRole === i && (
                    <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${COLORS.border}` }}>
                      <div style={{ paddingTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        {role.features.map((f, j) => (
                          <div
                            key={j}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 8,
                              fontSize: 12.5,
                              color: COLORS.text,
                              padding: "6px 10px",
                              borderRadius: 8,
                              background: role.color + "06",
                            }}
                          >
                            <span style={{ color: role.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODULES */}
        {activeTab === "modules" && (
          <div>
            <SectionTitle icon="📦" title="整体模块说明" subtitle="10 大模块分类，40+ 功能子模块完整覆盖" />

            {/* Module summary */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 24 }}>
              {moduleCategories.slice(0, 5).map((cat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    padding: "12px 10px",
                    textAlign: "center",
                    border: `1px solid ${COLORS.border}`,
                    cursor: "pointer",
                  }}
                  onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
                >
                  <span style={{ fontSize: 20 }}>{cat.icon}</span>
                  <div style={{ fontSize: 11, fontWeight: 600, color: cat.color, marginTop: 4 }}>{cat.category}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 24 }}>
              {moduleCategories.slice(5, 10).map((cat, i) => (
                <div
                  key={i + 5}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    padding: "12px 10px",
                    textAlign: "center",
                    border: `1px solid ${COLORS.border}`,
                    cursor: "pointer",
                  }}
                  onClick={() => setExpandedCategory(expandedCategory === i + 5 ? null : i + 5)}
                >
                  <span style={{ fontSize: 20 }}>{cat.icon}</span>
                  <div style={{ fontSize: 11, fontWeight: 600, color: cat.color, marginTop: 4 }}>{cat.category}</div>
                </div>
              ))}
            </div>

            {/* Module details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {moduleCategories.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: expandedCategory === catIdx ? `0 4px 20px ${cat.color}15` : "0 1px 3px rgba(0,0,0,0.04)",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    onClick={() => setExpandedCategory(expandedCategory === catIdx ? null : catIdx)}
                    style={{
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      cursor: "pointer",
                      background: expandedCategory === catIdx ? cat.color + "08" : "transparent",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: cat.color + "15",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: cat.color }}>{cat.category}</div>
                      <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{cat.modules.length} 个子模块</div>
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        color: COLORS.muted,
                        transform: expandedCategory === catIdx ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      ▾
                    </span>
                  </div>

                  {expandedCategory === catIdx && (
                    <div style={{ padding: "0 20px 16px", borderTop: `1px solid ${COLORS.border}` }}>
                      <div style={{ paddingTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        {cat.modules.map((mod, modIdx) => (
                          <div
                            key={modIdx}
                            style={{
                              padding: "12px 14px",
                              borderRadius: 10,
                              background: cat.color + "06",
                              border: `1px solid ${cat.color}12`,
                            }}
                          >
                            <div style={{ fontSize: 13, fontWeight: 700, color: cat.color, marginBottom: 4 }}>
                              {mod.name}
                            </div>
                            <div style={{ fontSize: 11.5, color: COLORS.muted, lineHeight: 1.5 }}>{mod.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "24px 0 32px", fontSize: 11.5, color: COLORS.muted }}>
        {platformInfo.title} {platformInfo.version}
      </div>
    </div>
  );
}
