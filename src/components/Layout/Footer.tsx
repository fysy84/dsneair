import DsneLogo from "./DsneLogo";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 border-t-8 border-stone-800 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-8 md:px-12 py-12 md:py-16 gap-8 max-w-[1920px] mx-auto">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex justify-start">
            <DsneLogo className="h-7 w-auto" />
          </div>
          <p className="font-sans text-sm text-[#FFCE00]">
            {t("footer.copyright")}
          </p>
          <p className="font-mono text-xs text-stone-600 uppercase tracking-wider">
            {t("footer.compliance")}
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:items-end justify-center gap-3">
          {["footer.link_1", "footer.link_2", "footer.link_3", "footer.link_4", "footer.link_5"].map((key) => (
            <a
              key={key}
              href="#"
              className="font-mono text-[0.75rem] text-stone-500 hover:text-stone-100 transition-all duration-300 uppercase tracking-widest"
              style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
            >
              {t(key)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
