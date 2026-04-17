import { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle, Wrench, Clock, Calendar, Shield, Download } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface TroubleshootItem {
  id: string;
  problem: string;
  causes: { cause: string; method: string }[];
}

const troubleshootingData: TroubleshootItem[] = [
  {
    id: "1",
    problem: "t_support.problem_fails_start",
    causes: [
      { cause: "t_support.cause_blown_fuse", method: "t_support.method_electrician_inspect" },
      { cause: "t_support.cause_relay_tripped", method: "t_support.method_electrician_inspect" },
      { cause: "t_support.cause_start_button", method: "t_support.method_electrician_inspect" },
      { cause: "t_support.cause_voltage_low", method: "t_support.method_electrician_inspect" },
      { cause: "t_support.cause_motor", method: "t_support.method_electrician_inspect" },
      { cause: "t_support.cause_unit", method: "t_support.method_manual_rotate" },
    ],
  },
  {
    id: "2",
    problem: "t_support.problem_high_temp",
    causes: [
      { cause: "t_support.cause_ambient_temp", method: "t_support.method_ventilation" },
      { cause: "t_support.cause_thermostat", method: "t_support.method_thermostat" },
      { cause: "t_support.cause_oil_low", method: "t_support.method_oil_level" },
      { cause: "t_support.cause_cooler_dirty", method: "t_support.method_clean_fins" },
      { cause: "t_support.cause_oil_filter", method: "t_support.method_replace_oil_filter" },
      { cause: "t_support.cause_cooling_fan", method: "t_support.method_replace_fan" },
      { cause: "t_support.cause_temp_sensor", method: "t_support.method_temp_sensor" },
    ],
  },
  {
    id: "3",
    problem: "t_support.problem_low_pressure",
    causes: [
      { cause: "t_support.cause_air_demand", method: "t_support.method_check_leaks" },
      { cause: "t_support.cause_air_filter", method: "t_support.method_clean_filter" },
      { cause: "t_support.cause_intake_valve", method: "t_support.method_check_intake" },
      { cause: "Clogged oil-air separator element", method: "Check pressure readings on gauges before and after oil-gas separator and on LCD display; replace if necessary" },
    ],
  },
  {
    id: "4",
    problem: "t_support.problem_shutdown_pressure",
    causes: [
      { cause: "t_support.cause_pressure_sensor", method: "t_support.method_troubleshoot" },
      { cause: "t_support.cause_exhaust_closed", method: "t_support.method_open_valve" },
    ],
  },
  {
    id: "5",
    problem: "t_support.problem_unable_idle",
    causes: [
      { cause: "t_support.cause_intake_malfunction", method: "t_support.method_check_intake" },
      { cause: "t_support.cause_pressure_fail", method: "t_support.method_repair" },
      { cause: "t_support.cause_relief_valve", method: "t_support.method_repair" },
    ],
  },
  {
    id: "6",
    problem: "t_support.problem_frequent_trips",
    causes: [
      { cause: "t_support.cause_pipe_leaks", method: "t_support.method_inspect_pipe" },
      { cause: "t_support.cause_pressure_diff", method: "t_support.method_reset" },
      { cause: "t_support.cause_unstable_air", method: "t_support.method_increase_tank" },
    ],
  },
  {
    id: "7",
    problem: "t_support.problem_oil_content",
    causes: [
      { cause: "t_support.cause_oil_high", method: "t_support.method_drain_oil" },
      { cause: "t_support.cause_return_line", method: "t_support.method_clean_return" },
      { cause: "t_support.cause_separator", method: "t_support.method_inspect_separator" },
      { cause: "t_support.cause_lube_leak", method: "t_support.method_inspect_pipe" },
      { cause: "t_support.cause_exhaust_low", method: "t_support.method_increase_vent" },
      { cause: "t_support.cause_oil_foam", method: "t_support.method_change_oil" },
    ],
  },
  {
    id: "8",
    problem: "t_support.problem_oil_mist",
    causes: [
      { cause: "t_support.cause_intake_seal", method: "t_support.method_check" },
      { cause: "t_support.cause_heavy_load", method: "t_support.method_check_intake_closed" },
      { cause: "t_support.cause_min_pressure", method: "t_support.method_repair" },
      { cause: "t_support.cause_oil_separator", method: "t_support.method_replace" },
    ],
  },
];

const maintenanceTimeline = [
  {
    period: "t_support.daily",
    label: "T+24H",
    icon: Clock,
    items: [
      "t_support.timeline_daily_oil",
      "t_support.timeline_daily_water",
    ],
  },
  {
    period: "t_support.weekly",
    label: "T+168H",
    icon: Calendar,
    items: [
      "t_support.timeline_weekly_noise",
      "t_support.timeline_weekly_instrument",
      "t_support.timeline_weekly_temp",
    ],
  },
  {
    period: "t_support.monthly",
    label: "T+720H",
    icon: Calendar,
    items: [
      "t_support.timeline_monthly_rust",
      "t_support.timeline_monthly_drain",
    ],
  },
  {
    period: "t_support.quarterly",
    label: "T+2,160H",
    icon: Shield,
    items: [
      "t_support.timeline_quarterly_cooler",
      "t_support.timeline_quarterly_prefilter",
      "t_support.timeline_quarterly_dusty",
      "t_support.timeline_quarterly_hoses",
      "t_support.timeline_quarterly_electrical",
    ],
  },
];

const scheduledMaintenance = [
  { item: "t_support.item_air_filter", 500: "t_support.item_air_filter_500", 1000: "t_support.item_air_filter_1000", 2000: null, 2500: null, 4000: null, remarks: "t_support.remarks_dust" },
  { item: "t_support.item_intake_seal", 500: null, 1000: "t_support.item_inspect_replace", 2000: null, 2500: null, 4000: null, remarks: "" },
  { item: "t_support.item_lubricant", 500: "t_support.item_check_level", 1000: null, 2000: null, 2500: "t_support.item_change_oil", 4000: null, remarks: "" },
  { item: "t_support.item_oil_filter", 500: "t_support.item_replace", 1000: null, 2000: null, 2500: "t_support.item_replace", 4000: null, remarks: "" },
  { item: "t_support.item_oil_separator", 500: null, 1000: null, 2000: null, 2500: "t_support.item_replace", 4000: null, remarks: "" },
  { item: "t_support.item_min_pressure", 500: null, 1000: "t_support.item_check_pressure", 2000: null, 2500: "t_support.item_clean", 4000: null, remarks: "" },
  { item: "t_support.item_cooler", 500: null, 1000: null, 2000: null, 2500: "t_support.item_remove_dust", 4000: null, remarks: "" },
  { item: "t_support.item_safety_valve", 500: null, 1000: null, 2000: null, 2500: "t_support.item_check_operation", 4000: null, remarks: "" },
  { item: "t_support.item_drain_valve", 500: null, 1000: null, 2000: null, 2500: "t_support.item_drain", 4000: null, remarks: "" },
  { item: "t_support.item_motor", 500: null, 1000: null, 2000: null, 2500: "t_support.item_grease", 4000: null, remarks: "t_support.remarks_motor" },
];

export default function SupportPage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 py-12 md:py-16 flex flex-col gap-24 md:gap-32">
        {/* Asymmetric Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-sans font-black text-6xl md:text-8xl tracking-tighter uppercase text-on-surface leading-[0.85]">
              System
              <br />
              <span className="text-[#FFCE00]">{t("support.title_2")}</span>
            </h1>
          </div>
          <div className="lg:col-span-4 bg-surface-container-low p-6 border-l-8 border-[#FFCE00]">
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-2">
              {t("support.status")}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FFCE00] animate-pulse" />
              <span className="font-mono text-lg font-bold tracking-tight text-on-surface">
                {t("support.nominal")}
              </span>
            </div>
            <p className="font-sans text-sm mt-4 text-on-surface-variant max-w-sm">
              {t("support.status_desc")}
            </p>
          </div>
        </header>

        {/* Safety Warning */}
        <div className="bg-error-container/20 border-l-4 border-[#ba1a1a] p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ba1a1a]" />
            <div>
              <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a]">
                {t("support.safety_title")}
              </h3>
              <ul className="mt-2 space-y-1.5 font-mono text-sm text-on-surface-variant">
                <li>• Stop the compressor and close the air outlet valve</li>
                <li>• Press the emergency stop button and disconnect the power supply</li>
                <li>• Hang a warning sign on the power switch</li>
                <li>• Depressurize the compressor</li>
                <li>• Close the shut-off valve connecting the compressor to the supply system</li>
                <li>• Never rely on the check valve to isolate the supply system</li>
                <li>• Do not remove nuts, oil plugs, or other parts while running or under pressure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Safety Warnings */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
            <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
              {t("safety.breathe_title")}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant">
              {t("safety.breathe_desc")}
            </p>
          </div>
          <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
            <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
              {t("safety.skin_contact_title")}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant">
              {t("safety.skin_contact_desc")}
            </p>
          </div>
          <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
            <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
              {t("safety.hearing_title")}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant">
              {t("safety.hearing_desc")}
            </p>
          </div>
          <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
            <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
              {t("safety.flammable_title")}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant">
              {t("safety.flammable_desc")}
            </p>
          </div>
        </section>

        {/* Lifecycle Timeline */}
        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4">
            <Wrench className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("support.intervals_title")}
            </h2>
          </div>

          <div className="relative pl-6 md:pl-12 border-l-4 border-surface-container-highest space-y-16 py-4">
            {maintenanceTimeline.map((period, i) => {
              const Icon = period.icon;
              return (
                <div key={i} className="relative">
                  <div className="absolute -left-[26px] md:-left-[50px] top-0 w-5 h-5 md:w-6 md:h-6 bg-surface border-4 border-[#FFCE00]" />
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                    <div className="md:col-span-3">
                      <span className="font-mono bg-surface-container-high text-on-surface px-3 py-1 text-xs font-bold tracking-widest uppercase">
                        {period.label}
                      </span>
                      <h3 className="font-sans font-bold text-xl md:text-2xl mt-3 text-on-surface uppercase tracking-tight">
                        {t(period.period)}
                      </h3>
                    </div>
                    <div className="md:col-span-9 bg-surface-container-low p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-surface-dim transform rotate-45 translate-x-6 -translate-y-6 md:translate-x-8 md:-translate-y-8" />
                      <ul className="font-mono text-sm md:text-base space-y-4 text-on-surface-variant w-full relative z-10">
                        {period.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* {t("support.overhaul")} */}
            <div className="relative">
              <div className="absolute -left-[26px] md:-left-[50px] top-0 w-5 h-5 md:w-6 md:h-6 bg-[#FFCE00] border-4 border-on-surface" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="font-mono bg-primary text-on-primary px-3 py-1 text-xs font-bold tracking-widest uppercase">
                    T+10,000H
                  </span>
                  <h3 className="font-sans font-black text-xl md:text-2xl mt-3 text-primary uppercase tracking-tight">
                    {t("support.overhaul")}
                  </h3>
                  <span className="font-mono text-xs text-[#ba1a1a] font-bold tracking-widest block mt-2">
                    {t("support.certified_tech")}
                  </span>
                </div>
                <div className="md:col-span-9 bg-on-surface p-6 md:p-8 relative overflow-hidden text-surface">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#FFCE00] transform rotate-45 translate-x-12 -translate-y-12 md:translate-x-16 md:-translate-y-16 opacity-20" />
                  <p className="font-sans text-lg font-bold mb-6 max-w-2xl text-[#FFCE00]">
                    {t("t_support.overhaul_desc")}
                  </p>
                  <ul className="font-mono text-sm md:text-base space-y-4 text-surface-dim w-full relative z-10">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                      <span>{t("t_support.overhaul_airend")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                      <span>{t("t_support.overhaul_motor")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                      <span>{t("t_support.overhaul_fluid")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Module - Split Pane */}
        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4">
            <AlertCircle className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("support.diagnostics_title")}
            </h2>
          </div>

          {/* Split Pane Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-t-8 border-[#FFCE00]">
            {/* Left Pane: Fault Index */}
            <div className="lg:col-span-4 bg-surface-container-lowest flex flex-col">
              <div className="p-6 bg-surface-container-low border-b-4 border-surface-container-high">
                <h3 className="font-mono font-bold text-sm text-on-surface tracking-widest uppercase">
                  {t("support.fault_index")}
                </h3>
              </div>
              <div className="flex-grow overflow-y-auto font-mono text-sm">
                {troubleshootingData.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className={`w-full text-left p-6 border-l-8 flex justify-between items-center transition-colors ${
                        isOpen
                          ? "border-[#FFCE00] bg-surface"
                          : "border-transparent hover:border-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      <span
                        className={`uppercase tracking-wider ${
                          isOpen
                            ? "font-bold text-on-surface"
                            : "font-medium text-on-surface-variant"
                        }`}
                      >
                        <span className="text-[#FFCE00] mr-2">ERR-{item.id.padStart(3, "0")}</span>
                        {t(item.problem)}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-[#FFCE00] shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-on-surface-variant shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Pane: Resolution Data */}
            <div className="lg:col-span-8 bg-surface-container-low flex flex-col relative overflow-hidden">
              {/* Blueprint pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #1a1c1c 0, #1a1c1c 1px, transparent 1px, transparent 20px)",
                }}
              />

              {openId ? (
                (() => {
                  const item = troubleshootingData.find((t) => t.id === openId)!;
                  return (
                    <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-[#FFCE00] text-black font-mono text-xs font-bold px-2 py-1 uppercase tracking-widest">
                            {t("support.fault_code")}: ERR-{item.id.padStart(3, "0")}
                          </span>
                        </div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl text-on-surface uppercase tracking-tighter leading-none mb-6">
                          {item.problem}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
                        <div>
                          <h4 className="font-mono font-bold text-xs text-on-surface border-b-2 border-outline-variant pb-2 mb-4 uppercase tracking-widest">
                            {t("support.primary_causes")}
                          </h4>
                          <ul className="font-mono text-sm space-y-3 text-on-surface-variant list-disc pl-5 marker:text-[#FFCE00]">
                            {item.causes.map((c, i) => (
                              <li key={i}>{c.cause}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono font-bold text-xs text-on-surface border-b-2 border-outline-variant pb-2 mb-4 uppercase tracking-widest">
                            {t("support.resolution_protocol")}
                          </h4>
                          <ol className="font-mono text-sm space-y-4 text-on-surface-variant list-decimal pl-5 marker:font-bold marker:text-on-surface">
                            {item.causes.map((c, i) => (
                              <li key={i}>{c.method}</li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      <div className="mt-auto pt-12">
                        <button className="bg-on-surface text-surface font-sans font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#FFCE00] hover:text-on-surface transition-colors duration-200 border-b-4 border-r-4 border-transparent hover:border-on-surface flex items-center gap-3">
                          <Download className="h-4 w-4" />
                          {t("support.download_schematic")}
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="p-8 md:p-12 relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <Wrench className="h-12 w-12 text-on-surface-variant/30 mb-4" />
                  <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest">
                    {t("support.select_fault")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Scheduled Maintenance Table */}
        <section>
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-8">
            <Calendar className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("support.schedule_title")}
            </h2>
          </div>

          <p className="font-mono text-sm text-on-surface-variant mb-6">
            Inspection and replacement intervals (hours).
          </p>

          <div className="overflow-x-auto bg-surface-container-low border-2 border-outline">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-left text-xs uppercase tracking-widest">
                    ITEM
                  </th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-center text-xs uppercase tracking-widest">500H</th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-center text-xs uppercase tracking-widest">1,000H</th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-center text-xs uppercase tracking-widest">2,000H</th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-center text-xs uppercase tracking-widest">2,500H</th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-center text-xs uppercase tracking-widest">4,000H</th>
                  <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-4 py-3 text-left text-xs uppercase tracking-widest">REMARKS</th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {scheduledMaintenance.map((row, i) => (
                  <tr key={i} className="border-b-2 border-outline-variant/40 hover:bg-inverse-surface hover:text-[#FFCE00] transition-colors">
                    <td className="px-4 py-3 font-bold">{t(row.item)}</td>
                    {[row[500 as keyof typeof row], row[1000 as keyof typeof row], row[2000 as keyof typeof row], row[2500 as keyof typeof row], row[4000 as keyof typeof row]].map(
                      (val, j) => (
                        <td key={j} className="px-4 py-3 text-center">
                          {val ? (
                            <span className="text-xs">{t(val)}</span>
                          ) : (
                            <span className="text-muted-foreground/30">—</span>
                          )}
                        </td>
                      )
                    )}
                    <td className="px-4 py-3 text-xs text-on-surface-variant">{row.remarks ? t(row.remarks) : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-6 bg-surface-container-high p-6 border-l-4 border-[#FFCE00]">
            <h3 className="font-sans font-bold text-sm uppercase text-on-surface mb-3">
              {t("support.important_notes")}
            </h3>
            <ul className="space-y-2 font-mono text-sm text-on-surface-variant">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.note_a")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.note_b")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.note_c")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.note_d")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.note_e")}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Maintenance Images */}
        <section>
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-8">
            <Wrench className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("support.maintenance_points")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/page12_0.jpeg", label: "Oil Tank Cap" },
              { src: "/images/page12_1.jpeg", label: "Oil Filler Plug" },
              { src: "/images/page12_2.jpeg", label: "Air Filter" },
              { src: "/images/page12_3.jpeg", label: "Oil Filter / Drain Port" },
            ].map((img, i) => (
              <div
                key={i}
                className="bg-surface-container-highest border-2 border-outline-variant/20 overflow-hidden group hover:border-[#FFCE00] transition-colors duration-300"
              >
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img src={img.src} alt={t("support.maintenance_points")} className="w-full h-full object-contain p-4" />
                </div>
                <div className="p-3 border-t-2 border-outline-variant/20">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-on-surface">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oil & Filter Notes */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-surface-container-low p-8 border-l-4 border-[#FFCE00]">
            <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4">
              {t("support.oil_title")}
            </h3>
            <ul className="space-y-3 font-mono text-sm text-on-surface-variant">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ba1a1a]" />
                <span>{t("t_support.oil_never_mix")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.oil_first_change")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.oil_filter_same_time")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ba1a1a]" />
                <span>{t("t_support.oil_never_expire")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-low p-8 border-l-4 border-[#FFCE00]">
            <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4">
              {t("support.filter_title")}
            </h3>
            <ul className="space-y-3 font-mono text-sm text-on-surface-variant">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.filter_weekly")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.filter_replace_normal")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ba1a1a]" />
                <span>{t("t_support.filter_harsh")}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>{t("t_support.filter_clearance")}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Warranty */}
        <section>
          <div className="bg-surface-container-low p-8 border-l-4 border-outline-variant">
            <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-3">
              {t("support.warranty_title")}
            </h3>
            <p className="font-mono text-sm text-on-surface-variant">
              {t("support.warranty_desc")}
            </p>
          </div>
        </section>

        {/* Cooler Maintenance */}
        <section className="bg-surface-container-low p-8 border-l-4 border-[#FFCE00]">
          <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4">
            {t("cooler.title")}
          </h3>
          <ul className="space-y-3 font-mono text-sm text-on-surface-variant">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
              <span>{t("cooler.frequency")}: {t("cooler.clean_interval")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
              <span>{t("cooler.method_air")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
              <span>{t("cooler.method_diesel")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ba1a1a]" />
              <span>{t("cooler.harsh_env")}</span>
            </li>
          </ul>
        </section>

        {/* PDF Downloads */}
        <section className="bg-surface-container-high p-8 border-l-4 border-outline-variant">
          <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4 flex items-center gap-2">
            <Download className="h-5 w-5 text-[#FFCE00]" />
            {t("download.manual")}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/2025-CN.pdf"
              download="DSNE-AIR-说明书-2025.pdf"
              className="flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface transition-colors border border-outline group"
            >
              <div>
                <p className="font-mono font-bold text-sm text-on-surface group-hover:text-[#FFCE00] transition-colors">
                  {t("download.chinese")}
                </p>
                <p className="font-mono text-xs text-on-surface-variant mt-1">
                  PDF • 1.2 MB
                </p>
              </div>
              <Download className="h-5 w-5 text-on-surface-variant group-hover:text-[#FFCE00] transition-colors" />
            </a>
            <a
              href="/2025-EN.pdf"
              download="DSNE-AIR-Instruction-Manual-2025.pdf"
              className="flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface transition-colors border border-outline group"
            >
              <div>
                <p className="font-mono font-bold text-sm text-on-surface group-hover:text-[#FFCE00] transition-colors">
                  {t("download.english")}
                </p>
                <p className="font-mono text-xs text-on-surface-variant mt-1">
                  PDF • 1.4 MB
                </p>
              </div>
              <Download className="h-5 w-5 text-on-surface-variant group-hover:text-[#FFCE00] transition-colors" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
