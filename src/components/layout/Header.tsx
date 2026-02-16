import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-erokilab.png";

const Header = () => {
  const { t, lang, setLang, languages, localePath } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={localePath("/")} className="flex items-center gap-3">
            <img src={logo} alt="ErokiLab" className="h-10 lg:h-12 w-auto rounded" />
            <span className="font-heading text-lg lg:text-xl font-bold text-foreground tracking-tight">
              EROKI<span className="text-accent">LAB</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to={localePath("/")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.home")}
            </Link>
            <Link to={localePath("/registration")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.registration")}
            </Link>
            <Link to={localePath("/trade")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.trade")}
            </Link>
            <Link to={localePath("/contact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Language Switcher + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-border rounded-lg px-2 py-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    lang === l.code
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3">
            <Link to={localePath("/")} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {t("nav.home")}
            </Link>
            <Link to={localePath("/registration")} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {t("nav.registration")}
            </Link>
            <Link to={localePath("/trade")} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {t("nav.trade")}
            </Link>
            <Link to={localePath("/contact")} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {t("nav.contact")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
