import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Download } from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white relative overflow-hidden py-28 md:py-36 px-6 md:px-8">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            <div className="inline-block bg-[#FFCE00] text-black font-mono font-bold px-4 py-1.5 text-xs uppercase tracking-widest self-start">
              {t("hero.compliance")}
            </div>

            <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] uppercase">
              {t("hero.title_1")}
              <br />
              <span className="text-[#FFCE00]">{t("hero.title_2")}</span>
              <br />
              {t("hero.title_3")}
            </h1>

            <p className="font-mono text-stone-400 text-base md:text-xl max-w-3xl mt-4 leading-relaxed">
              {t("hero.desc")}
            </p>

            {/* Product Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-surface-container-high/50 p-4 border-l-2 border-[#FFCE00]">
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{t("product.standard")}</p>
                <p className="font-mono text-xs text-white mt-1">JB/T 6430-2002</p>
              </div>
              <div className="bg-surface-container-high/50 p-4 border-l-2 border-[#FFCE00]">
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{t("product.power_range")}</p>
                <p className="font-mono text-xs text-white mt-1">5.5 - 315 kW</p>
              </div>
              <div className="bg-surface-container-high/50 p-4 border-l-2 border-[#FFCE00]">
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{t("product.voltage")}</p>
                <p className="font-mono text-xs text-white mt-1">380V / 50Hz</p>
              </div>
              <div className="bg-surface-container-high/50 p-4 border-l-2 border-[#FFCE00]">
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{t("product.models_count")}</p>
                <p className="font-mono text-xs text-white mt-1">16 Models</p>
              </div>
            </div>

            {/* Testing Note */}
            <div className="bg-[#FFCE00]/10 border border-[#FFCE00]/30 p-4 mt-4">
              <p className="font-mono text-xs text-stone-400 leading-relaxed">
                {t("product.testing_note")}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/specs"
                className="bg-[#FFCE00] text-black font-mono font-bold text-sm px-8 py-4 uppercase tracking-widest border-b-4 border-r-4 border-black hover:bg-[#efc100] hover:border-b-2 hover:border-r-2 hover:translate-y-[2px] hover:translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px] active:border-b-0 active:border-r-0 transition-all duration-100 flex items-center gap-3"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
              >
                {t("hero.cta_whitepaper")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="h-full border-l-4 border-stone-800 pl-6">
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src="/images/dsneair-compressor.png"
                  alt="DSNE AIR Variable Frequency Screw Air Compressor - Product View"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border-l-4 border-[#FFCE00]">
                  <p className="font-mono text-[#FFCE00] text-xs uppercase tracking-widest mb-2">
                    {t("hero.system_status")}
                  </p>
                  <p className="font-sans font-bold text-2xl text-white">
                    {t("hero.nominal_output")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Bento Grid */}
      <section className="py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-surface-container-low p-12 relative overflow-hidden group hover:bg-surface-container transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FFCE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 mb-6 bg-[#FFCE00]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFCE00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="font-sans font-black text-3xl text-on-surface uppercase mb-4 tracking-tight">
                {t("feature.energy_title")}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                {t("feature.energy_desc")}
              </p>
            </div>

            <div className="md:col-span-8 bg-surface-container-high p-12 relative overflow-hidden group hover:bg-surface-variant transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FFCE00]/10 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-[#FFCE00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-black text-3xl text-on-surface uppercase mb-4 tracking-tight">
                    {t("feature.precision_title")}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-on-surface-variant max-w-2xl">
                    Built to JB/T 6430-2002 standard for General Oil-Injected {t("hero.title_3")}s.
                    Ensures vibration-free operation at maximum RPM, extending lifecycle significantly
                    under continuous load.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-outline-variant/30 pt-8">
                <div>
                  <span className="font-mono text-xs text-on-surface-variant block mb-1 uppercase tracking-widest">
                    {t("feature.max_pressure")}
                  </span>
                  <span className="font-sans font-bold text-xl text-on-surface">12.5 BAR</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-on-surface-variant block mb-1 uppercase tracking-widest">
                    {t("feature.noise_level")}
                  </span>
                  <span className="font-sans font-bold text-xl text-on-surface">&lt; 68 dB(A)</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-on-surface-variant block mb-1 uppercase tracking-widest">
                    {t("feature.cooling")}
                  </span>
                  <span className="font-sans font-bold text-xl text-on-surface">LIQUID / AIR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="border-t-4 border-surface-container-high bg-surface-container-low">
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 py-20">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-12">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("gallery.title")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/banner_compressor.png", label: t("gallery.22kw") },
              { src: "/images/banner_compressor.png", label: t("gallery.mobile") },
              { src: "/images/banner_compressor.png", label: t("gallery.production") },
              { src: "/images/banner_compressor.png", label: t("gallery.factory") },
            ].map((img, i) => (
              <div
                key={i}
                className="bg-surface-container-highest border-2 border-outline-variant/20 overflow-hidden group hover:border-[#FFCE00] transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-3 border-t-2 border-outline-variant/20">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-on-surface">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory / {t("gallery.production")} */}
      <section className="bg-surface px-6 md:px-8 py-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border-l-4 border-[#FFCE00] mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  {t("mfg.doc_ref")}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                  {t("gallery.production")}
                </p>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter uppercase text-on-surface leading-none mb-6">
                {t("mfg.title")}
              </h2>
              <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                {t("mfg.desc")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/9] bg-surface-container-lowest border-4 border-outline-variant/20 overflow-hidden">
                <img
                  src="/images/banner_compressor.png"
                  alt="DSNE AIR Production Line"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Configuration */}
      <section className="bg-surface-container-low px-6 md:px-8 py-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border-l-4 border-[#FFCE00] mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  {t("sys.doc_ref")}
                </p>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter uppercase text-on-surface leading-none mb-6">
                {t("sys.title")}
              </h2>
              <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                {t("sys.desc")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/9] bg-surface-container-lowest border-4 border-outline-variant/20 overflow-hidden">
                <img
                  src="/images/banner_compressor.png"
                  alt="DSNE AIR Compressor Detail"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t-4 border-[#FFCE00] px-6 md:px-8 py-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="bg-surface-container-low p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 border-8 border-[#FFCE00] opacity-10" />
            <div className="max-w-3xl relative z-10">
              <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tighter uppercase text-on-surface mb-4">
                {t("cta.title")}
              </h2>
              <p className="font-mono text-base text-on-surface-variant mb-8 tracking-wide">
                {t("cta.desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/support"
                  className="bg-[#FFCE00] text-black font-mono font-bold text-sm px-8 py-4 uppercase tracking-widest border-b-4 border-r-4 border-black hover:bg-[#efc100] hover:translate-y-[2px] hover:translate-x-[2px] hover:border-b-2 hover:border-r-2 active:translate-y-[4px] active:translate-x-[4px] active:border-b-0 active:border-r-0 transition-all duration-100 flex items-center gap-3"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                >
                  {t("cta.troubleshooting")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/installation"
                  className="border-2 border-on-surface text-on-surface font-mono font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-on-surface hover:text-background transition-colors duration-200"
                >
                  {t("cta.safety")}
                </Link>
              </div>
              {/* PDF Downloads */}
              <div className="mt-8 pt-8 border-t-2 border-outline-variant">
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">
                  {t("download.manual")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/2025-CN.pdf"
                    download="DSNE-AIR-说明书-2025.pdf"
                    className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-low text-on-surface font-mono text-xs px-4 py-2 border border-outline transition-colors"
                  >
                    <Download className="h-3 w-3" />
                    {t("download.chinese")}
                  </a>
                  <a
                    href="/2025-EN.pdf"
                    download="DSNE-AIR-Instruction-Manual-2025.pdf"
                    className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-low text-on-surface font-mono text-xs px-4 py-2 border border-outline transition-colors"
                  >
                    <Download className="h-3 w-3" />
                    {t("download.english")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
