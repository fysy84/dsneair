import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import DsneLogo from "./DsneLogo";

const navItems = [
  { path: "/", labelKey: "nav.equipment" },
  { path: "/specs", labelKey: "nav.systems" },
  { path: "/installation", labelKey: "nav.engineering" },
  { path: "/support", labelKey: "nav.support" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-stone-950 border-b-4 border-[#FFCE00]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3 md:py-4 max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <DsneLogo className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-mono text-sm tracking-widest uppercase transition-colors duration-200 pb-1",
                  isActive
                    ? "text-[#FFCE00] border-b-2 border-[#FFCE00]"
                    : "text-stone-400 font-medium hover:text-[#FFCE00]"
                )}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-2 text-stone-400 hover:text-[#FFCE00] transition-colors duration-200"
            title={lang === "en" ? "切换中文" : "Switch to English"}
          >
            <Languages className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-widest">
              {lang === "en" ? "中文" : "EN"}
            </span>
          </button>

          <Link
            to="/specs"
            className="bg-[#FFCE00] text-stone-950 font-mono font-bold text-sm px-6 py-2.5 uppercase tracking-widest border-b-4 border-r-4 border-stone-800 hover:bg-[#efc100] active:border-b-0 active:border-r-0 active:translate-y-1 active:translate-x-1 transition-all"
          >
            {t("nav.request_spec")}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-stone-400 hover:text-[#FFCE00] transition-colors"
          >
            <Languages className="h-5 w-5" />
          </button>
          <button
            className="text-[#FFCE00]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 px-6 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block font-mono text-sm tracking-widest uppercase py-2 transition-colors",
                  isActive ? "text-[#FFCE00]" : "text-stone-400"
                )}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-stone-800">
            <button
              onClick={() => {
                setLang(lang === "en" ? "zh" : "en");
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-stone-400 hover:text-[#FFCE00] transition-colors font-mono text-sm uppercase tracking-widest"
            >
              <Languages className="h-4 w-4" />
              {lang === "en" ? "切换中文" : "Switch to English"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
