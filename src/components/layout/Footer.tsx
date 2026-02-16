import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo-erokilab.png";

const Footer = () => {
  const { t, localePath } = useLanguage();
  const countries = ["country.russia", "country.belarus", "country.kazakhstan", "country.armenia", "country.kyrgyzstan"];

  return (
    <footer className="gradient-footer border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={localePath("/")} className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ErokiLab" className="h-14 w-auto rounded" />
              <span className="font-heading text-lg font-bold text-foreground">
                EROKI<span className="text-accent">LAB</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.desc")}</p>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.markets")}</h4>
            <ul className="space-y-2">
              {countries.map((c) => (
                <li key={c} className="text-sm text-muted-foreground">{t(c)}</li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("nav.home")}</h4>
            <ul className="space-y-2">
              <li><Link to={localePath("/registration")} className="text-sm text-muted-foreground hover:text-accent transition-colors">{t("nav.registration")}</Link></li>
              <li><Link to={localePath("/trade")} className="text-sm text-muted-foreground hover:text-accent transition-colors">{t("nav.trade")}</Link></li>
              <li><Link to={localePath("/contact")} className="text-sm text-muted-foreground hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">info@erokilab.com</li>
              <li className="text-sm text-muted-foreground">+374 XX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2023 ErokiLab. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-accent cursor-pointer transition-colors">{t("footer.privacy")}</span>
            <span className="text-xs text-muted-foreground hover:text-accent cursor-pointer transition-colors">{t("footer.terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
