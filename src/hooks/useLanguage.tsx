import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

// === Translation Dictionary ===
const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.equipment": { en: "EQUIPMENT", zh: "设备" },
  "nav.systems": { en: "SYSTEMS", zh: "系统" },
  "nav.engineering": { en: "ENGINEERING", zh: "工程" },
  "nav.support": { en: "SUPPORT", zh: "支持" },
  "nav.request_spec": { en: "REQUEST SPEC", zh: "索取规格" },

  // Homepage Hero
  "hero.compliance": { en: "Compliance Standard: JB/T 6430-2002", zh: "执行标准：JB/T 6430-2002" },
  "hero.title_1": { en: "2025 Permanent Magnet", zh: "2025 永磁" },
  "hero.title_2": { en: "Variable Frequency", zh: "变频" },
  "hero.title_3": { en: "Screw Air Compressor", zh: "螺杆空压机" },
  "hero.desc": {
    en: "Engineered for absolute precision and maximum output. The new benchmark in heavy-industrial pneumatic systems. A superior, energy-efficient option compared to similar models.",
    zh: "为绝对精度和最大产量而设计。重型工业气动系统的新标杆。与同类机型相比，是更优越、更节能的选择。",
  },
  "hero.cta_whitepaper": { en: "Download Technical Whitepaper", zh: "下载技术白皮书" },
  "hero.system_status": { en: "SYSTEM STATUS", zh: "系统状态" },
  "hero.nominal_output": { en: "NOMINAL OUTPUT", zh: "额定输出" },

  // Homepage Features
  "feature.energy_title": { en: "Advanced Energy Efficiency", zh: "先进能效" },
  "feature.energy_desc": {
    en: "Permanent magnet technology reduces energy consumption by up to 35% compared to standard asynchronous systems.",
    zh: "永磁技术比标准异步系统降低能耗高达 35%。",
  },
  "feature.precision_title": { en: "Precision Engineering", zh: "精密工程" },
  "feature.precision_desc": {
    en: "Built to JB/T 6430-2002 standard for General Oil-Injected Screw Air Compressors. Ensures vibration-free operation at maximum RPM, extending lifecycle significantly under continuous load.",
    zh: "按照 JB/T 6430-2002 喷油螺杆空气压缩机标准制造。确保在最大转速下无振动运行，在连续负载下显著延长使用寿命。",
  },
  "feature.max_pressure": { en: "MAX PRESSURE", zh: "最大压力" },
  "feature.noise_level": { en: "NOISE LEVEL", zh: "噪音等级" },
  "feature.cooling": { en: "COOLING", zh: "冷却方式" },

  // Homepage Gallery
  "gallery.title": { en: "Product Lineup", zh: "产品系列" },
  "gallery.22kw": { en: "22 kW Screw Compressor", zh: "22 kW 螺杆空压机" },
  "gallery.mobile": { en: "Mobile Compressor", zh: "移动空压机" },
  "gallery.production": { en: "Production Line", zh: "生产线" },
  "gallery.factory": { en: "Factory Production", zh: "工厂生产" },

  // Homepage Manufacturing
  "mfg.doc_ref": { en: "Document Ref: SYS-CONFIG-2025", zh: "文档编号：SYS-CONFIG-2025" },
  "mfg.production_line": { en: "Production Line", zh: "生产线" },
  "mfg.title": { en: "Manufacturing Excellence", zh: "卓越制造" },
  "mfg.desc": {
    en: "DSNE AIR operates state-of-the-art manufacturing facilities with automated production lines, ensuring consistent quality across all compressor models.",
    zh: "DSNE AIR 运营最先进的制造设施，配备自动化生产线，确保所有空压机型号的质量一致性。",
  },

  // Homepage System Config
  "sys.doc_ref": { en: "System Architecture Diagram", zh: "系统架构图" },
  "sys.title": { en: "System Configuration", zh: "系统配置" },
  "sys.desc": {
    en: "Compressor → Air Receiver → Refrigerated Dryer → Class C Filter → T-class Filter → A-class Filter → Air Consumption Point",
    zh: "空压机 → 储气罐 → 冷冻式干燥机 → C 级过滤器 → T 级过滤器 → A 级过滤器 → 用气点",
  },

  // Homepage CTA
  "cta.title": { en: "Need Technical Support?", zh: "需要技术支持？" },
  "cta.desc": {
    en: "Access troubleshooting guides, maintenance schedules, and installation procedures.",
    zh: "获取故障排查指南、维护计划表和安装程序。",
  },
  "cta.troubleshooting": { en: "Troubleshooting Guide", zh: "故障排查指南" },
  "cta.safety": { en: "Safety Precautions", zh: "安全注意事项" },

  // Specs Page
  "specs.doc_ref": { en: "Document Ref: SPEC-2025", zh: "文档编号：SPEC-2025" },
  "specs.status": { en: "Status: CURRENT", zh: "状态：现行" },
  "specs.title": { en: "Performance Specifications", zh: "性能规格" },
  "specs.subtitle": {
    en: "Comprehensive operational metrics for DSNE AIR industrial compressor systems. All data represents standard operating conditions at 380V.",
    zh: "DSNE AIR 工业空压机系统的综合运行指标。所有数据代表 380V 标准工况。",
  },
  "specs.voltage": { en: "VOLTAGE: 380V", zh: "电压：380V" },
  "specs.freq": { en: "FREQ: 50Hz", zh: "频率：50Hz" },
  "specs.model": { en: "MODEL ID", zh: "型号" },
  "specs.power_hp": { en: "POWER (HP)", zh: "功率 (HP)" },
  "specs.power_kw": { en: "POWER (kW)", zh: "功率 (kW)" },
  "specs.max_current": { en: "MAX CURRENT (A)", zh: "最大电流 (A)" },
  "specs.wire_size": { en: "WIRE SIZE (mm²)", zh: "线径 (mm²)" },
  "specs.high_capacity": { en: "HIGH CAPACITY", zh: "大容量" },
  "specs.pipe_title": { en: "Pipe Pressure Drop Data", zh: "管道压降数据" },
  "specs.pipe_subtitle": {
    en: "Air flow rate vs. pipe pressure drop at 2 kg/cm² over 100 m. Values in kg/cm² per 100 m pipe length.",
    zh: "2 kg/cm² 压力下 100 米管道空气流量与压降关系。数值单位为 kg/cm²/100m。",
  },
  "specs.calc_title": { en: "Calculation Notes", zh: "计算说明" },
  "specs.calc_note_1": {
    en: "Actual pressure drop = Table value × Pipe length / (100 × Compression ratio), where Compression ratio = Gauge pressure + 1.",
    zh: "实际压降 = 表值 × 管道长度 / (100 × 压缩比)，其中压缩比 = 表压 + 1。",
  },
  "specs.calc_note_2": {
    en: "Total pressure drop must also include local pressure losses caused by elbows, reducers, tees, valves, etc. Refer to relevant engineering handbooks.",
    zh: "总压降还必须包括弯头、变径管、三通、阀门等引起的局部压力损失。请参考相关工程手册。",
  },

  // Installation Page
  "install.doc_ref": { en: "Document Ref: IN-8902-A", zh: "文档编号：IN-8902-A" },
  "install.status": { en: "Status: MANDATORY", zh: "状态：强制" },
  "install.title": { en: "Spatial & Installation Guide", zh: "空间与安装指南" },
  "install.subtitle": {
    en: "CRITICAL SAFETY PROTOCOLS AND DIMENSIONAL REQUIREMENTS FOR HEAVY MACHINERY PLACEMENT. STRICT ADHERENCE REQUIRED.",
    zh: "重型机械放置的关键安全协议和尺寸要求。必须严格遵守。",
  },
  "install.transport_title": { en: "1. Transportation & Handling", zh: "1. 运输与搬运" },
  "install.loading_title": { en: "Loading & Unloading — Forklift Requirements", zh: "装卸 — 叉车要求" },
  "install.transport_precautions": { en: "Transport Precautions", zh: "运输注意事项" },
  "install.clearance_title": { en: "Spatial Clearance Requirements", zh: "空间间隙要求" },
  "install.side_clearance": { en: ">1000mm SIDE CLEARANCE", zh: ">1000mm 侧面间隙" },
  "install.top_clearance": { en: ">1500mm TOP CLEARANCE", zh: ">1500mm 顶部间隙" },
  "install.electrical_title": { en: "3.1 Electrical Safety", zh: "3.1 电气安全" },
  "install.precautions_title": { en: "3.2 Precautions During Installation", zh: "3.2 安装注意事项" },
  "install.procedures_title": { en: "4. Operating Procedures — Initial Installation", zh: "4. 操作程序 — 初始安装" },
  "install.control_panel_title": { en: "5. Control Panel", zh: "5. 控制面板" },
  "install.control_panel_desc": {
    en: "Due to design requirements or stability considerations, this product may use control panels manufactured by different vendors. Operating procedures may vary by manufacturer. A control panel operation manual and inverter manual are provided with this product.",
    zh: "由于设计要求或稳定性考虑，本产品可能使用不同制造商生产的控制面板。操作程序可能因制造商而异。本产品附带控制面板操作手册和变频器手册。",
  },

  // Support Page
  "support.title_1": { en: "System", zh: "系统" },
  "support.title_2": { en: "Maintenance", zh: "维护" },
  "support.status": { en: "Operational Status", zh: "运行状态" },
  "support.nominal": { en: "NOMINAL / LIVE LOGGING", zh: "正常 / 实时记录" },
  "support.status_desc": {
    en: "Access critical lifecycle schedules and diagnostic protocols for DSNE AIR heavy industrial compressor units. Strict adherence to listed intervals ensures optimal MTBF parameters.",
    zh: "获取 DSNE AIR 重型工业空压机单元的关键生命周期计划和诊断协议。严格遵守列出的间隔可确保最佳的 MTBF 参数。",
  },
  "support.safety_title": { en: "Maintenance Safety Precautions", zh: "维护安全注意事项" },
  "support.intervals_title": { en: "Maintenance Intervals", zh: "维护间隔" },
  "support.daily": { en: "Daily", zh: "每日" },
  "support.weekly": { en: "Weekly", zh: "每周" },
  "support.monthly": { en: "Monthly", zh: "每月" },
  "support.quarterly": { en: "Every Three Months", zh: "每季度" },
  "support.overhaul": { en: "Major Overhaul", zh: "大修" },
  "support.certified_tech": { en: "REQUIRES CERTIFIED TECH", zh: "需要认证技术人员" },
  "support.diagnostics_title": { en: "Diagnostics & Resolution", zh: "诊断与解决方案" },
  "support.fault_index": { en: "Common Fault Index", zh: "常见故障索引" },
  "support.primary_causes": { en: "Primary Causes", zh: "主要原因" },
  "support.resolution_protocol": { en: "Resolution Protocol", zh: "解决方案" },
  "support.schedule_title": { en: "Scheduled Maintenance Schedule", zh: "计划维护时间表" },
  "support.important_notes": { en: "Important Notes", zh: "重要说明" },
  "support.maintenance_points": { en: "Maintenance Disassembly Points", zh: "维护拆解点" },
  "support.oil_title": { en: "Oil Specifications", zh: "油品规格" },
  "support.filter_title": { en: "Air Filter Maintenance", zh: "空气过滤器维护" },
  "support.warranty_title": { en: "7.2 Product Warranty Obligations", zh: "7.2 产品保修义务" },
  "support.warranty_desc": {
    en: "Use only authorized and approved parts. Any damage or malfunction resulting from the use of unauthorized or unapproved parts is not covered by the warranty or product liability.",
    zh: "仅使用授权和批准的零件。因使用未经授权或批准的零件而导致的任何损坏或故障不在保修或产品责任范围内。",
  },
  "support.download_schematic": { en: "Download Full Schematic", zh: "下载完整原理图" },
  "support.select_fault": {
    en: "Select a fault from the index to view diagnostic details",
    zh: "从索引中选择故障以查看诊断详情",
  },

  // Footer
  "footer.copyright": { en: "©2025 DSNE AIR INDUSTRIAL SYSTEMS. ALL RIGHTS RESERVED.", zh: "©2025 德斯奈尔工业系统。保留所有权利。" },
  "footer.compliance": { en: "Product Compliance: JB/T 6430-2002", zh: "产品合规：JB/T 6430-2002" },
  "footer.link_1": { en: "JB/T 6430-2002 COMPLIANCE", zh: "JB/T 6430-2002 合规" },
  "footer.link_2": { en: "IEC 60364-5-523 STANDARDS", zh: "IEC 60364-5-523 标准" },
  "footer.link_3": { en: "SAFETY PROTOCOLS", zh: "安全协议" },
  "footer.link_4": { en: "EQUIPMENT REGISTRY", zh: "设备注册" },
  "footer.link_5": { en: "INSTRUCTION MANUAL — 1ST EDITION, 2025", zh: "说明书 — 第一版，2025" },

  "specs.search_placeholder": { en: "Search HP, kW, current...", zh: "搜索 HP、kW、电流..." },
  "specs.data_ref": { en: "DATA REF: REV-A.24", zh: "数据参考：REV-A.24" },
  "specs.calc_note_1": { en: "Actual pressure drop = Table value × Pipe length / (100 × Compression ratio), where Compression ratio = Gauge pressure + 1.", zh: "实际压降 = 表值 × 管道长度 / (100 × 压缩比)，其中压缩比 = 表压 + 1。" },
  "specs.calc_note_2": { en: "Total pressure drop must also include local pressure losses caused by elbows, reducers, tees, valves, etc. Refer to relevant engineering handbooks.", zh: "总压降还必须包括弯头、变径管、三通、阀门等引起的局部压力损失。请参考相关工程手册。" },
  "specs.system_arch": { en: "System Architecture Diagram", zh: "系统架构图" },
  "specs.system_config": { en: "System Configuration", zh: "系统配置" },
  "specs.system_desc": { en: "Compressor → Air Receiver → Refrigerated Dryer → Class C Filter → T-class Filter → A-class Filter → Air Consumption Point", zh: "空压机 → 储气罐 → 冷冻式干燥机 → C 级过滤器 → T 级过滤器 → A 级过滤器 → 用气点" },
  "install.unit_core": { en: "UNIT CORE", zh: "设备核心" },
  "install.subtitle": { en: "CRITICAL SAFETY PROTOCOLS AND DIMENSIONAL REQUIREMENTS FOR HEAVY MACHINERY PLACEMENT. STRICT ADHERENCE REQUIRED.", zh: "重型机械放置的关键安全协议和尺寸要求。必须严格遵守。" },
  "install.loading_title": { en: "Loading & Unloading — Forklift Requirements", zh: "装卸 — 叉车要求" },
  "install.transport_precautions": { en: "Transport Precautions", zh: "运输注意事项" },
  "install.clearance_title": { en: "Spatial Clearance Requirements", zh: "空间间隙要求" },
  "install.side_clearance": { en: ">1000mm SIDE CLEARANCE", zh: ">1000mm 侧面间隙" },
  "install.top_clearance": { en: ">1500mm TOP CLEARANCE", zh: ">1500mm 顶部间隙" },
  "install.control_panel_desc": { en: "Due to design requirements or stability considerations, this product may use control panels manufactured by different vendors. Operating procedures may vary by manufacturer. A control panel operation manual and inverter manual are provided with this product.", zh: "由于设计要求或稳定性考虑，本产品可能使用不同制造商生产的控制面板。操作程序可能因制造商而异。本产品附带控制面板操作手册和变频器手册。" },
  "support.status": { en: "Operational Status", zh: "运行状态" },
  "support.nominal": { en: "NOMINAL / LIVE LOGGING", zh: "正常 / 实时记录" },
  "support.status_desc": { en: "Access critical lifecycle schedules and diagnostic protocols for DSNE AIR heavy industrial compressor units. Strict adherence to listed intervals ensures optimal MTBF parameters.", zh: "获取 DSNE AIR 重型工业空压机单元的关键生命周期计划和诊断协议。严格遵守列出的间隔可确保最佳的 MTBF 参数。" },
  "support.safety_title": { en: "Maintenance Safety Precautions", zh: "维护安全注意事项" },
  "support.intervals_title": { en: "Maintenance Intervals", zh: "维护间隔" },
  "support.overhaul": { en: "Major Overhaul", zh: "大修" },
  "support.certified_tech": { en: "REQUIRES CERTIFIED TECH", zh: "需要认证技术人员" },
  "support.diagnostics_title": { en: "Diagnostics & Resolution", zh: "诊断与解决方案" },
  "support.fault_index": { en: "Common Fault Index", zh: "常见故障索引" },
  "support.primary_causes": { en: "Primary Causes", zh: "主要原因" },
  "support.resolution_protocol": { en: "Resolution Protocol", zh: "解决方案" },
  "support.schedule_title": { en: "Scheduled Maintenance Schedule", zh: "计划维护时间表" },
  "support.important_notes": { en: "Important Notes", zh: "重要说明" },
  "support.maintenance_points": { en: "Maintenance Disassembly Points", zh: "维护拆解点" },
  "support.oil_title": { en: "Oil Specifications", zh: "油品规格" },
  "support.filter_title": { en: "Air Filter Maintenance", zh: "空气过滤器维护" },
  "support.warranty_title": { en: "7.2 Product Warranty Obligations", zh: "7.2 产品保修义务" },
  "support.warranty_desc": { en: "Use only authorized and approved parts. Any damage or malfunction resulting from the use of unauthorized or unapproved parts is not covered by the warranty or product liability.", zh: "仅使用授权和批准的零件。因使用未经授权或批准的零件而导致的任何损坏或故障不在保修或产品责任范围内。" },
  "support.download_schematic": { en: "Download Full Schematic", zh: "下载完整原理图" },
  "support.select_fault": { en: "Select a fault from the index to view diagnostic details", zh: "从索引中选择故障以查看诊断详情" },
  "support.fault_code": { en: "Fault Code", zh: "故障代码" },
  "support.critical_alert": { en: "Critical Alert", zh: "严重警报" },

  // Support - Troubleshooting problems
  "t_support.problem_fails_start": { en: "Fails to Start", zh: "无法启动" },
  "t_support.problem_high_temp": { en: "High Exhaust Temperature (shutdown if exceeds 105°C)", zh: "排气温度过高（超过 105°C 自动停机）" },
  "t_support.problem_low_pressure": { en: "Low Exhaust Pressure", zh: "排气压力过低" },
  "t_support.problem_shutdown_pressure": { en: "Shutdown Due to Excessive Exhaust Pressure", zh: "排气压力过高停机" },
  "t_support.problem_unable_idle": { en: "Unable to Idle; System Pressure Remains at Operating Pressure or Continues to Rise During Idling", zh: "无法空载；系统压力保持在运行压力或空载时继续上升" },
  "t_support.problem_frequent_trips": { en: "Frequent Empty and Loaded Trips", zh: "频繁空载和加载切换" },
  "t_support.problem_oil_content": { en: "High Oil Content in the Air, Excessive Oil Consumption", zh: "压缩空气含油量高，油耗过大" },
  "t_support.problem_oil_mist": { en: "Oil Mist Escapes from the Air Filter When the Machine is Shut Down", zh: "停机时油雾从空气过滤器逸出" },

  // Support - Troubleshooting causes
  "t_support.cause_blown_fuse": { en: "Blown fuse", zh: "保险丝熔断" },
  "t_support.cause_relay_tripped": { en: "Protective relay tripped", zh: "保护继电器跳闸" },
  "t_support.cause_start_button": { en: "Poor contact in the start button", zh: "启动按钮接触不良" },
  "t_support.cause_voltage_low": { en: "Voltage too low", zh: "电压过低" },
  "t_support.cause_motor": { en: "Motor malfunction", zh: "电机故障" },
  "t_support.cause_unit": { en: "Unit malfunction", zh: "主机故障" },
  "t_support.cause_ambient_temp": { en: "Ambient temperature is too high", zh: "环境温度过高" },
  "t_support.cause_thermostat": { en: "Thermostatic valve malfunction", zh: "温控阀故障" },
  "t_support.cause_oil_low": { en: "Insufficient lubricating oil", zh: "润滑油不足" },
  "t_support.cause_cooler_dirty": { en: "Oil cooler fins are excessively dirty", zh: "油冷却器翅片过脏" },
  "t_support.cause_oil_filter": { en: "Clogged oil filter", zh: "油过滤器堵塞" },
  "t_support.cause_cooling_fan": { en: "Cooling fan malfunction", zh: "冷却风扇故障" },
  "t_support.cause_temp_sensor": { en: "Temperature sensor failure", zh: "温度传感器故障" },
  "t_support.cause_air_demand": { en: "Air demand exceeds supply", zh: "用气量超过供气量" },
  "t_support.cause_air_filter": { en: "Clogged air filter", zh: "空气过滤器堵塞" },
  "t_support.cause_intake_valve": { en: "Intake valve not opening fully", zh: "进气阀未完全打开" },
  "t_support.cause_pressure_sensor": { en: "Abnormal pressure sensor setting or malfunction", zh: "压力传感器设置异常或故障" },
  "t_support.cause_exhaust_closed": { en: "Exhaust valve is closed", zh: "排气阀关闭" },
  "t_support.cause_intake_malfunction": { en: "Intake valve malfunction", zh: "进气阀故障" },
  "t_support.cause_pressure_fail": { en: "Pressure sensor failure", zh: "压力传感器故障" },
  "t_support.cause_relief_valve": { en: "Relief valve failure", zh: "安全阀故障" },
  "t_support.cause_pipe_leaks": { en: "Pipe Leaks", zh: "管道泄漏" },
  "t_support.cause_pressure_diff": { en: "Pressure differential between empty and loaded set too low", zh: "空载和加载压差设置过低" },
  "t_support.cause_unstable_air": { en: "Unstable air consumption", zh: "用气量不稳定" },
  "t_support.cause_oil_high": { en: "Oil level too high", zh: "油位过高" },
  "t_support.cause_return_line": { en: "Clogged return line filter or throttle orifice", zh: "回油过滤器或节流孔堵塞" },
  "t_support.cause_separator": { en: "Damaged oil-air separator element or gasket", zh: "油气分离器滤芯或垫片损坏" },
  "t_support.cause_lube_leak": { en: "Leak in the lubrication system", zh: "润滑系统泄漏" },
  "t_support.cause_exhaust_low": { en: "Exhaust pressure too low", zh: "排气压力过低" },
  "t_support.cause_oil_foam": { en: "Excessive oil foaming", zh: "润滑油泡沫过多" },
  "t_support.cause_intake_seal": { en: "Intake valve is not sealing properly", zh: "进气阀密封不良" },
  "t_support.cause_heavy_load": { en: "Shutdown under heavy load", zh: "重载下停机" },
  "t_support.cause_min_pressure": { en: "Minimum pressure valve leak", zh: "最小压力阀泄漏" },
  "t_support.cause_oil_separator": { en: "Damaged oil-fine separator", zh: "油细分离器损坏" },

  // Support - Troubleshooting methods
  "t_support.method_electrician_inspect": { en: "Have an electrician inspect and replace", zh: "请电工检查并更换" },
  "t_support.method_manual_rotate": { en: "Manually rotate the unit; if it cannot be turned, contact the manufacturer", zh: "手动盘车；如果无法转动，请联系制造商" },
  "t_support.method_ventilation": { en: "Improve ventilation", zh: "改善通风" },
  "t_support.method_thermostat": { en: "Check/replace the thermostat", zh: "检查/更换温控阀" },
  "t_support.method_oil_level": { en: "Check / adjust oil level", zh: "检查/调整油位" },
  "t_support.method_clean_fins": { en: "Clean the radiator fins", zh: "清理散热器翅片" },
  "t_support.method_replace_oil_filter": { en: "Replace the oil filter", zh: "更换油过滤器" },
  "t_support.method_replace_fan": { en: "Replace the cooling fan", zh: "更换冷却风扇" },
  "t_support.method_temp_sensor": { en: "Check / Replace Temperature Sensor", zh: "检查/更换温度传感器" },
  "t_support.method_check_leaks": { en: "Check for leaks in the piping", zh: "检查管道泄漏" },
  "t_support.method_clean_filter": { en: "Clean or replace the filter element", zh: "清洁或更换滤芯" },
  "t_support.method_check_intake": { en: "Check the intake valve", zh: "检查进气阀" },
  "t_support.method_troubleshoot": { en: "Troubleshoot or replace", zh: "排查故障或更换" },
  "t_support.method_open_valve": { en: "Open the exhaust valve", zh: "打开排气阀" },
  "t_support.method_repair": { en: "Repair; replace if necessary", zh: "修理；必要时更换" },
  "t_support.method_inspect_pipe": { en: "Inspect the piping", zh: "检查管道" },
  "t_support.method_reset": { en: "Reset", zh: "重新设置" },
  "t_support.method_increase_tank": { en: "Increase air tank capacity", zh: "增加储气罐容量" },
  "t_support.method_drain_oil": { en: "Check the oil level and drain oil to the normal level", zh: "检查油位并将油排放至正常水平" },
  "t_support.method_clean_return": { en: "Clean the filter screen and throttle orifice of the return line filter; replace if necessary", zh: "清洁回油过滤器滤网和节流孔；必要时更换" },
  "t_support.method_inspect_separator": { en: "Inspect the filter element and gasket; replace if damaged", zh: "检查滤芯和垫片；损坏则更换" },
  "t_support.method_increase_vent": { en: "Increase the vent pressure", zh: "提高排气压力" },
  "t_support.method_change_oil": { en: "Change the lubricating oil", zh: "更换润滑油" },
  "t_support.method_check": { en: "Check", zh: "检查" },
  "t_support.method_check_intake_closed": { en: "Check if the intake valve is fully closed", zh: "检查进气阀是否完全关闭" },
  "t_support.method_replace": { en: "Replace", zh: "更换" },

  // Support - Maintenance timeline
  "t_support.daily": { en: "Daily", zh: "每日" },
  "t_support.weekly": { en: "Weekly", zh: "每周" },
  "t_support.monthly": { en: "Monthly", zh: "每月" },
  "t_support.quarterly": { en: "Every Three Months", zh: "每季度" },
  "t_support.timeline_daily_oil": { en: "Check the oil level. Check the reading on the display.", zh: "检查油位。检查显示屏读数。" },
  "t_support.timeline_daily_water": { en: "For water-cooled units: Check the cooling water flow.", zh: "水冷机型：检查冷却水流量。" },
  "t_support.timeline_weekly_noise": { en: "Check the unit for unusual noises and leaks.", zh: "检查机组是否有异常噪音和泄漏。" },
  "t_support.timeline_weekly_instrument": { en: "Check that the instrument readings are correct.", zh: "检查仪表读数是否正确。" },
  "t_support.timeline_weekly_temp": { en: "Check that the temperature display is functioning normally.", zh: "检查温度显示是否正常。" },
  "t_support.timeline_monthly_rust": { en: "Inspect the unit for rust or loose parts; if rust is present, remove it and apply oil or paint; tighten any loose parts.", zh: "检查机组是否有锈蚀或松动部件；如有锈蚀，清除并涂油或油漆；紧固松动部件。" },
  "t_support.timeline_monthly_drain": { en: "Drain the condensate.", zh: "排放冷凝水。" },
  "t_support.timeline_quarterly_cooler": { en: "Inspect the cooler and clean if necessary. Remove and inspect the air filter element. Clean with compressed air if necessary.", zh: "检查冷却器，必要时清洁。拆下并检查空气过滤器滤芯。必要时用压缩空气清洁。" },
  "t_support.timeline_quarterly_prefilter": { en: "Inspect the pre-filter element (if installed). Replace if necessary.", zh: "检查前置过滤器滤芯（如已安装）。必要时更换。" },
  "t_support.timeline_quarterly_dusty": { en: "Clean more frequently when operating in dusty environments.", zh: "在多尘环境中运行时应更频繁地清洁。" },
  "t_support.timeline_quarterly_hoses": { en: "Inspect hoses for signs of aging or cracking.", zh: "检查软管是否有老化或开裂迹象。" },
  "t_support.timeline_quarterly_electrical": { en: "Inspect electrical components and clean the control panel.", zh: "检查电气元件并清洁控制面板。" },

  // Support - Overhaul
  "t_support.overhaul_desc": { en: "Comprehensive system strip-down. Replacement of critical wear components.", zh: "全面系统拆解。更换关键磨损部件。" },
  "t_support.overhaul_airend": { en: "Complete airend rebuild including rotor bearing replacement and clearance recalibration", zh: "完整主机大修，包括转子轴承更换和间隙重新校准" },
  "t_support.overhaul_motor": { en: "Full drive motor servicing (greasing bearings, evaluating stator insulation)", zh: "驱动电机全面保养（轴承加脂、评估定子绝缘）" },
  "t_support.overhaul_fluid": { en: "Fluid flush, separation core replacement, and system recalibration", zh: "油路冲洗、分离芯更换和系统重新校准" },

  // Support - Scheduled maintenance items
  "t_support.item_air_filter": { en: "Air Filter Cartridges", zh: "空气过滤器滤芯" },
  "t_support.item_air_filter_500": { en: "Remove surface dust", zh: "清除表面灰尘" },
  "t_support.item_air_filter_1000": { en: "Replace with new element", zh: "更换新滤芯" },
  "t_support.item_intake_seal": { en: "Intake Valve Piston Seal", zh: "进气阀活塞密封" },
  "t_support.item_inspect_replace": { en: "Inspect or replace", zh: "检查或更换" },
  "t_support.item_lubricant": { en: "Compressor Lubricant", zh: "空压机润滑油" },
  "t_support.item_check_level": { en: "Check level", zh: "检查油位" },
  "t_support.item_change_oil": { en: "Change to new oil", zh: "更换新油" },
  "t_support.item_oil_filter": { en: "Oil Filter", zh: "油过滤器" },
  "t_support.item_replace": { en: "Replace", zh: "更换" },
  "t_support.item_oil_separator": { en: "Oil-Air Separator", zh: "油气分离器" },
  "t_support.item_min_pressure": { en: "Minimum Pressure Valve", zh: "最小压力阀" },
  "t_support.item_check_pressure": { en: "Check opening pressure", zh: "检查开启压力" },
  "t_support.item_clean": { en: "Clean", zh: "清洁" },
  "t_support.item_cooler": { en: "Cooler Dust Removal", zh: "冷却器除尘" },
  "t_support.item_remove_dust": { en: "Remove dust", zh: "清除灰尘" },
  "t_support.item_safety_valve": { en: "Safety Valve", zh: "安全阀" },
  "t_support.item_check_operation": { en: "Check operation", zh: "检查运行" },
  "t_support.item_drain_valve": { en: "Drain Valve", zh: "排污阀" },
  "t_support.item_drain": { en: "Drain water/debris", zh: "排放水/杂质" },
  "t_support.item_motor": { en: "Motor", zh: "电机" },
  "t_support.item_grease": { en: "Apply grease", zh: "加注润滑脂" },
  "t_support.remarks_dust": { en: "Extend/shorten based on dust accumulation", zh: "根据积尘情况延长/缩短" },
  "t_support.remarks_motor": { en: "Follow motor instructions", zh: "遵循电机说明" },


  // Installation - Electrical safety
  "t_install.elec_cord_title": { en: "Correct Power Cord Gauge", zh: "正确电源线规格" },
  "t_install.elec_cord_desc": { en: "Select the correct power cord gauge based on the air compressor's power rating. Do not use a cord with insufficient gauge — this may cause overheating and burnout.", zh: "根据空压机功率选择正确的电源线规格。不得使用规格不足的电线——可能导致过热和烧毁。" },
  "t_install.elec_dedicated_title": { en: "Dedicated Power System", zh: "专用电源系统" },
  "t_install.elec_dedicated_desc": { en: "Use a dedicated power system. Avoid connecting in parallel with other electrical loads to prevent voltage drops or three-phase current imbalance that may trigger protective device trips.", zh: "使用专用电源系统。避免与其他电气负载并联，以防止电压降或三相电流不平衡导致保护装置跳闸。" },
  "t_install.elec_limits_title": { en: "Current & Voltage Limits", zh: "电流和电压限制" },
  "t_install.elec_limits_desc": { en: "Motor operating current must not exceed 15% of rated current. Three-phase current imbalance must not exceed 5%. Voltage drop must not be less than 5% of rated voltage.", zh: "电机运行电流不得超过额定电流的 15%。三相电流不平衡不得超过 5%。电压降不得低于额定电压的 5%。" },
  "t_install.elec_voltage_title": { en: "Voltage Matching", zh: "电压匹配" },
  "t_install.elec_voltage_desc": { en: "Ensure supply voltage matches the motor's rated voltage when distributing power.", zh: "配电时确保供电电压与电机额定电压匹配。" },
  "t_install.elec_ground_title": { en: "Grounding Required", zh: "必须接地" },
  "t_install.elec_ground_desc": { en: "A grounding wire must be installed for the motor or system. Note: The grounding wire must not be connected directly to the air delivery pipe or cooling water pipe.", zh: "电机或系统必须安装接地线。注意：接地线不得直接连接到送气管或冷却水管。" },
  "t_install.elec_breaker_title": { en: "Circuit Breaker", zh: "断路器" },
  "t_install.elec_breaker_desc": { en: "Select and install an appropriate circuit breaker based on the air compressor's power rating to protect electrical switches and ensure safety.", zh: "根据空压机功率选择并安装合适的断路器，以保护电气开关并确保安全。" },

  // Installation - Precautions
  "t_install.lift_title": { en: "Lifting Safety", zh: "吊装安全" },
  "t_install.lift_desc": { en: "Only lift using appropriate equipment per safety regulations. Fasten all loose or rotating parts before lifting. Never pause under suspended loads. Wear safety helmets in lifting areas.", zh: "仅使用符合安全规定的适当设备进行吊装。吊装前固定所有松动或旋转部件。严禁在悬吊物下停留。在吊装区域必须佩戴安全帽。" },
  "t_install.env_title": { en: "Environment Requirements", zh: "环境要求" },
  "t_install.env_desc": { en: "Place in an environment with cool, clean air. Install air intake duct if necessary. Do not block the air inlet. Minimize moisture in incoming air.", zh: "放置在凉爽、清洁空气的环境中。必要时安装进气管道。不得堵塞进气口。尽量减少进气中的水分。" },
  "t_install.pipe_title": { en: "Pipe Preparation", zh: "管道准备" },
  "t_install.pipe_desc": { en: "Remove all blind flanges, plugs, caps, and desiccant bags before connecting piping.", zh: "连接管道前拆除所有盲板、堵头、盖帽和干燥剂袋。" },
  "t_install.hose_title": { en: "Hose Specifications", zh: "软管规格" },
  "t_install.hose_desc": { en: "Air hoses must be correct size and suitable for operating pressure. Do not use worn, damaged, or old hoses.", zh: "空气软管必须尺寸正确且适合工作压力。不得使用磨损、损坏或老化的软管。" },
  "t_install.flammable_title": { en: "No Flammable Intake", zh: "禁止易燃进气" },
  "t_install.flammable_desc": { en: "Intake air must not contain flammable gases, vapors, or particles (e.g., paint solvents) that could cause internal fire or explosion.", zh: "进气不得含有易燃气体、蒸气或颗粒（如油漆溶剂），以免引起内部火灾或爆炸。" },
  "t_install.remote_title": { en: "Remote Control Warning", zh: "远程控制警告" },
  "t_install.remote_desc": { en: "If remote control is installed, mark with: 'Danger: This machine is controlled remotely and may start without warning.' Lock out power before maintenance.", zh: "如果安装了远程控制，必须标注：'危险：本机由远程控制，可能无预警启动。'维护前锁定电源。" },
  "t_install.cooling_title": { en: "Cooling Air Flow", zh: "冷却气流" },
  "t_install.cooling_desc": { en: "Air-cooled machines must be installed so that sufficient cooling air is available and exhaust air does not recirculate into the compressor inlet.", zh: "风冷机型必须安装以确保有足够的冷却空气，且排气不会回流到压缩机进气口。" },
  "t_install.electrical_title": { en: "Electrical Compliance", zh: "电气合规" },
  "t_install.electrical_desc": { en: "Electrical connections must comply with applicable codes. Machine must be grounded with fuses in each phase. Install lockable power disconnect switch near compressor.", zh: "电气连接必须符合适用规范。机器必须接地，每相安装保险丝。在压缩机附近安装可锁定的电源隔离开关。" },
  "t_install.autostart_title": { en: "Auto Start-Stop Label", zh: "自动启停标签" },
  "t_install.autostart_desc": { en: "Machines with automatic restart after power failure must have a label near the panel stating: 'This machine may start without warning.'", zh: "断电后自动重启的机器必须在面板附近贴有标签：'本机可能无预警启动。'" },
  "t_install.multi_title": { en: "Multi-Compressor Isolation", zh: "多压缩机隔离" },
  "t_install.multi_desc": { en: "In multi-compressor systems, manual valves must isolate each compressor. Check valves must not be used to isolate the pressure system.", zh: "在多压缩机系统中，手动阀门必须隔离每台压缩机。不得使用止回阀隔离压力系统。" },
  "t_install.tamper_title": { en: "No Tampering", zh: "禁止篡改" },
  "t_install.tamper_desc": { en: "Do not remove or tamper with safety devices, protective devices, or insulators. Use pressure relief devices to protect pressurized vessels.", zh: "不得拆除或篡改安全装置、保护装置或绝缘体。使用泄压装置保护压力容器。" },
  "t_install.hot_title": { en: "Hot Surface Protection", zh: "高温表面防护" },
  "t_install.hot_desc": { en: "Parts exceeding 80°C (176°F) that may be touched must be protected or isolated. Other high-temperature pipes must be clearly marked.", zh: "超过 80°C（176°F）且可能被触摸的部件必须加以防护或隔离。其他高温管道必须清晰标记。" },

  // Installation - Operating procedures
  "t_install.proc_1": { en: "Ensure inlet/ambient temperature is not below 0°C. If below 0°C, contact the manufacturer.", zh: "确保进气/环境温度不低于 0°C。如果低于 0°C，请联系制造商。" },
  "t_install.proc_2": { en: "Remove transport securing bolts from main unit, motor, and oil separator tank (typically painted red).", zh: "拆除主机、电机和油气分离罐上的运输固定螺栓（通常涂有红色油漆）。" },
  "t_install.proc_3": { en: "Check electrical connections are correct and cable terminals are secure.", zh: "检查电气连接是否正确，电缆端子是否牢固。" },
  "t_install.proc_4": { en: "Check air line connections are secure.", zh: "检查空气管路连接是否牢固。" },
  "t_install.proc_5": { en: "Before commissioning, ensure no one is present in hazardous areas near the motor or compressor.", zh: "调试前，确保电机或压缩机附近的危险区域无人。" },
  "t_install.proc_6": { en: "When operating, all doors and panels must be closed.", zh: "运行时，所有门和面板必须关闭。" },
  "t_install.proc_7": { en: "If connecting to power for the first time, check motor rotation direction. If incorrect, immediately press emergency stop.", zh: "首次接通电源时，检查电机旋转方向。如果不正确，立即按下紧急停止按钮。" },
  "t_install.proc_8": { en: "After connecting main power, all indicator lights and LCD display segments will illuminate for a display test.", zh: "接通主电源后，所有指示灯和 LCD 显示屏段将点亮进行显示测试。" },
  "t_install.proc_9": { en: "The compressor has an automatic operation monitoring system that will shut down the machine in case of malfunction.", zh: "压缩机配有自动运行监控系统，发生故障时将自动停机。" },
  "t_install.proc_10": { en: "Press the compressor start button to begin operation.", zh: "按下压缩机启动按钮开始运行。" },

  // Installation - Forklift
  "t_install.forklift_3t": { en: "Use 3-ton forklift", zh: "使用 3 吨叉车" },
  "t_install.forklift_5t": { en: "Use 5-ton forklift", zh: "使用 5 吨叉车" },
  "t_install.forklift_10t": { en: "Use 10-ton forklift", zh: "使用 10 吨叉车" },
  "t_install.forklift_align": { en: "Align forks with forklift slots; ensure forks are long enough", zh: "将叉齿对准叉车槽；确保叉齿足够长" },
  "t_install.forklift_crane": { en: "Overhead crane: insert channel steel into forklift slots, use sling spreader", zh: "使用行车：将槽钢插入叉车槽，使用吊具撑开吊索" },

  // Installation - Transport
  "t_install.transport_collision": { en: "Avoid collisions to prevent housing damage", zh: "避免碰撞以防止外壳损坏" },
  "t_install.transport_stack": { en: "Do not stack during transport — housing may deform", zh: "运输过程中不得堆叠——外壳可能变形" },
  "t_install.transport_moisture": { en: "Protect against moisture — severe humidity affects performance", zh: "防潮——严重湿度会影响性能" },


  "t_support.note_a": { en: "A. Before maintenance: release all pressure, isolate from pressure sources, disconnect main circuit breakers, and post safety signs.", zh: "A. 维护前：释放所有压力，与压力源隔离，断开主断路器，并张贴安全标志。" },
  "t_support.note_b": { en: "B. Oil replacement depends on environment, humidity, dust levels. New machines: first change at 500h, then every 2,500h.", zh: "B. 换油取决于环境、湿度、粉尘水平。新机：首次 500h 更换，之后每 2,500h 更换。" },
  "t_support.note_c": { en: "C. Oil filter: replace at 500h, then 1,000h, then every 2,500h.", zh: "C. 油过滤器：500h 更换，然后 1,000h，之后每 2,500h 更换。" },
  "t_support.note_d": { en: "D. When servicing air filter or intake valve, prevent debris from entering compressor head.", zh: "D. 维护空气过滤器或进气阀时，防止杂物进入压缩机主机。" },
  "t_support.note_e": { en: "E. The oil filter must be replaced every time the oil is changed.", zh: "E. 每次换油时必须更换油过滤器。" },
  "t_support.oil_never_mix": { en: "Never mix different brands or types of lubricating oil — they may be incompatible", zh: "切勿混合不同品牌或类型的润滑油——可能不兼容" },
  "t_support.oil_first_change": { en: "First oil change after 500-hour break-in; thereafter every 2,000 operating hours", zh: "首次换油在 500 小时磨合期后；之后每 2,000 运行小时更换" },
  "t_support.oil_filter_same_time": { en: "Replace oil filter at the same time as changing oil", zh: "换油时同时更换油过滤器" },
  "t_support.oil_never_expire": { en: "Never use lubricating oil past its expiration date — risk of overheating and spontaneous combustion", zh: "切勿使用过期的润滑油——有过热和自燃风险" },
  "t_support.filter_weekly": { en: "Maintain once a week: blow dust off with compressed air at 0.2–0.4 MPa from inside out", zh: "每周维护一次：用 0.2–0.4 MPa 压缩空气从内向外吹除灰尘" },
  "t_support.filter_replace_normal": { en: "Replace every 1,000–1,500 hours under normal conditions", zh: "正常工况下每 1,000–1,500 小时更换" },
  "t_support.filter_harsh": { en: "In harsh environments (mines, ceramic factories, cotton mills): replace every 500 hours", zh: "恶劣环境（矿山、陶瓷厂、棉纺厂）：每 500 小时更换" },
  "t_support.filter_clearance": { en: "Internal clearances only allow particles < 15 microns — clogged filter causes serious damage", zh: "内部间隙仅允许 < 15 微米的颗粒通过——过滤器堵塞会造成严重损坏" },

};
