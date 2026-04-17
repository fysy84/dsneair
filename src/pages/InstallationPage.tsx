import { AlertTriangle, Zap, Shield, HardHat, Wind, Thermometer, Wrench, Ban, CheckCircle, AlertOctagon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const electricalSafetyItems = [
  {
    icon: Zap,
    title: "t_install.elec_cord_title",
    desc: "t_install.elec_cord_desc",
    severity: "warning",
  },
  {
    icon: Shield,
    title: "t_install.elec_dedicated_title",
    desc: "t_install.elec_dedicated_desc",
    severity: "warning",
  },
  {
    icon: Thermometer,
    title: "t_install.elec_limits_title",
    desc: "t_install.elec_limits_desc",
    severity: "danger",
  },
  {
    icon: CheckCircle,
    title: "t_install.elec_voltage_title",
    desc: "t_install.elec_voltage_desc",
    severity: "info",
  },
  {
    icon: Zap,
    title: "t_install.elec_ground_title",
    desc: "t_install.elec_ground_desc",
    severity: "danger",
  },
  {
    icon: Shield,
    title: "t_install.elec_breaker_title",
    desc: "t_install.elec_breaker_desc",
    severity: "info",
  },
];

const installationPrecautions = [
  {
    icon: HardHat,
    title: "t_install.lift_title",
    desc: "t_install.lift_desc",
  },
  {
    icon: Wind,
    title: "t_install.env_title",
    desc: "t_install.env_desc",
  },
  {
    icon: Wrench,
    title: "t_install.pipe_title",
    desc: "t_install.pipe_desc",
  },
  {
    icon: Thermometer,
    title: "t_install.hose_title",
    desc: "t_install.hose_desc",
  },
  {
    icon: Ban,
    title: "t_install.flammable_title",
    desc: "t_install.flammable_desc",
  },
  {
    icon: AlertTriangle,
    title: "t_install.remote_title",
    desc: "t_install.remote_desc",
  },
  {
    icon: Wind,
    title: "t_install.cooling_title",
    desc: "t_install.cooling_desc",
  },
  {
    icon: Zap,
    title: "t_install.electrical_title",
    desc: "t_install.electrical_desc",
  },
  {
    icon: AlertTriangle,
    title: "t_install.autostart_title",
    desc: "t_install.autostart_desc",
  },
  {
    icon: Shield,
    title: "t_install.multi_title",
    desc: "t_install.multi_desc",
  },
  {
    icon: Ban,
    title: "t_install.tamper_title",
    desc: "t_install.tamper_desc",
  },
  {
    icon: Thermometer,
    title: "t_install.hot_title",
    desc: "t_install.hot_desc",
  },
];

const severityColors: Record<string, string> = {
  danger: "border-l-4 border-[#ba1a1a] bg-error-container/20",
  warning: "border-l-4 border-[#FFCE00] bg-surface-container-low",
  info: "border-l-4 border-outline-variant bg-surface-container-lowest",
};

export default function InstallationPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-surface-container-high p-4 border-l-4 border-primary">
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                {t("install.doc_ref")}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                {t("install.status")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-sans font-black text-5xl md:text-7xl tracking-tighter uppercase text-on-surface leading-none mb-4">
              {t("install.title")}
            </h1>
            <p className="font-mono text-lg md:text-xl text-on-surface-variant max-w-3xl">
              {t("install.subtitle")}
            </p>
          </div>
        </div>

        {/* Transportation Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.transport_title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface-container-low p-8 border-l-4 border-[#FFCE00]">
              <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4">
                {t("install.loading_title")}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                  <span>
                    <strong className="text-on-surface">≤ 75 kW:</strong> {t("t_install.forklift_3t")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                  <span>
                    <strong className="text-on-surface">90–132 kW:</strong> {t("t_install.forklift_5t")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                  <span>
                    <strong className="text-on-surface">160–250 kW:</strong> {t("t_install.forklift_10t")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                  <span>
                    {t("t_install.forklift_align")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#FFCE00]" />
                  <span>
                    {t("t_install.forklift_crane")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-container-low p-8 border-l-4 border-[#ba1a1a]">
              <h3 className="font-sans font-bold text-lg uppercase text-on-surface mb-4">
                {t("install.transport_precautions")}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#ba1a1a]" />
                  <span>{t("t_install.transport_collision")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#ba1a1a]" />
                  <span>{t("t_install.transport_stack")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#ba1a1a]" />
                  <span>{t("t_install.transport_moisture")}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clearance Diagram */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.clearance_title")}
            </h2>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-surface-container-lowest border-4 border-outline-variant/20 flex items-center justify-center overflow-hidden mb-8">
            {/* Blueprint grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1a1c1c 1px, transparent 1px), linear-gradient(to bottom, #1a1c1c 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Central unit */}
            <div className="relative z-10 w-1/3 h-1/2 bg-surface-container-highest border-2 border-on-surface flex items-center justify-center">
              <span className="font-mono font-bold text-lg tracking-widest text-on-surface opacity-40">
                {t("install.unit_core")}
              </span>
            </div>

            {/* Side clearance annotation */}
            <div className="absolute z-20 left-[15%] md:left-[25%] top-1/2 -translate-y-1/2">
              <div className="bg-[#FFCE00] text-black border-2 border-on-surface px-4 py-2 font-mono font-bold text-sm md:text-base flex items-center gap-2" style={{ boxShadow: "8px 8px 0px rgba(26,28,28,1)" }}>
                <AlertTriangle className="h-4 w-4" />
                {t("install.side_clearance")}
              </div>
              <div className="absolute top-1/2 right-0 w-8 h-0.5 bg-on-surface -translate-y-1/2" />
            </div>

            {/* Top clearance annotation */}
            <div className="absolute z-20 top-[15%] md:top-[20%] left-1/2 -translate-x-1/2">
              <div className="bg-[#FFCE00] text-black border-2 border-on-surface px-4 py-2 font-mono font-bold text-sm md:text-base flex items-center gap-2" style={{ boxShadow: "8px 8px 0px rgba(26,28,28,1)" }}>
                {t("install.top_clearance")}
              </div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-on-surface -translate-x-1/2" />
            </div>
          </div>
        </section>

        {/* Electrical Safety */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <AlertOctagon className="h-7 w-7 text-[#ba1a1a]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.electrical_title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electricalSafetyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`p-6 ${severityColors[item.severity]}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans font-bold text-sm uppercase text-on-surface mb-2">
                    {t(item.title)}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                    {t(item.desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Installation Precautions */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <Shield className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.precautions_title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {installationPrecautions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-surface-container-low p-6 border-l-4 border-outline-variant hover:border-[#FFCE00] transition-colors duration-300"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-surface-container-high text-on-surface-variant">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans font-bold text-sm uppercase text-on-surface mb-2">
                    {t(item.title)}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                    {t(item.desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Operating Procedures */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <Wrench className="h-7 w-7 text-[#FFCE00]" />
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.procedures_title")}
            </h2>
          </div>

          <div className="space-y-3">
            {[
              "t_install.proc_1",
              "t_install.proc_2",
              "t_install.proc_3",
              "t_install.proc_4",
              "t_install.proc_5",
              "t_install.proc_6",
              "t_install.proc_7",
              "t_install.proc_8",
              "t_install.proc_9",
              "t_install.proc_10",
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-4 bg-surface-container-low p-4 border-l-4 border-outline-variant hover:border-[#FFCE00] transition-colors duration-300"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#FFCE00] text-xs font-black text-black">
                  {i + 1}
                </span>
                <p className="font-mono text-sm text-on-surface-variant">{t(step)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Control Panel Image */}
        <section>
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("install.control_panel_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border-l-4 border-[#FFCE00] mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  {t("specs.system_arch")}
                </p>
              </div>
              <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                {t("install.control_panel_desc")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/9] bg-surface-container-lowest border-4 border-outline-variant/20 overflow-hidden">
                <img
                  src="/images/banner_compressor.png"
                  alt={t("install.control_panel_title")}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Legend Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              Safety Legend
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFCE00] flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="font-sans font-bold text-sm uppercase text-on-surface">{t("safety.legend_caution")}</p>
                <p className="font-mono text-xs text-on-surface-variant">Caution / 注意</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a] flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ba1a1a] flex items-center justify-center">
                <AlertOctagon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-sans font-bold text-sm uppercase text-on-surface">{t("safety.legend_warning")}</p>
                <p className="font-mono text-xs text-on-surface-variant">Warning / 警示</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-outline flex items-center gap-4">
              <div className="w-12 h-12 bg-outline flex items-center justify-center">
                <Ban className="h-6 w-6 text-on-surface" />
              </div>
              <div>
                <p className="font-sans font-bold text-sm uppercase text-on-surface">{t("safety.legend_prohibit")}</p>
                <p className="font-mono text-xs text-on-surface-variant">Prohibited / 禁止</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Safety Instructions */}
        <section className="mb-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-10">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              Safety Precautions — Detailed Guidelines
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
                {t("safety.breathe_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.breathe_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
                {t("safety.skin_contact_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.skin_contact_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
                {t("safety.hearing_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.hearing_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
                {t("safety.noise_check_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.noise_check_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
                {t("safety.flammable_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.flammable_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
                {t("safety.remote_warning_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.remote_warning_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#FFCE00]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#FFCE00] mb-3">
                {t("safety.water_cooling_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.water_cooling_desc")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-4 border-[#ba1a1a]">
              <h3 className="font-sans font-bold text-sm uppercase text-[#ba1a1a] mb-3">
                {t("safety.grounding_title")}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                {t("safety.grounding_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Stop Procedure */}
        <section className="bg-error-container/20 p-8 border-l-4 border-[#ba1a1a]">
          <h3 className="font-sans font-bold text-lg uppercase text-[#ba1a1a] mb-4 flex items-center gap-2">
            <AlertOctagon className="h-5 w-5" />
            {t("safety.emergency_title")}
          </h3>
          <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
            {t("safety.emergency_desc")}
          </p>
        </section>
      </div>
    </div>
  );
}
