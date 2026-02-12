import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Shield, CheckCircle, Globe, Handshake, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import products from "@/assets/erokilab-products.jpeg";

const HomePage = () => {
  const { t, localePath } = useLanguage();

  const countries = [
    { key: "country.russia", flag: "🇷🇺" },
    { key: "country.belarus", flag: "🇧🇾" },
    { key: "country.kazakhstan", flag: "🇰🇿" },
    { key: "country.armenia", flag: "🇦🇲" },
    { key: "country.kyrgyzstan", flag: "🇰🇬" },
  ];

  const trustItems = [
    { icon: Shield, key: "trust.compliance" },
    { icon: CheckCircle, key: "trust.gmp" },
    { icon: Globe, key: "trust.fullcycle" },
    { icon: Handshake, key: "trust.partnership" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/40" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">ErokiLab</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                {t("hero.headline")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                {t("hero.subheadline")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={localePath("/registration")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card"
                >
                  {t("hero.cta.registration")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={localePath("/trade")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
                >
                  {t("hero.cta.trade")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Two Divisions */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
            {t("divisions.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Registration Card */}
            <div className="gradient-registration rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-elevated transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-4">{t("divisions.reg.title")}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("divisions.reg.desc")}</p>
              <Link to={localePath("/registration")} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                {t("divisions.learn")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Trade Card */}
            <div className="gradient-trade rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-elevated transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-4">{t("divisions.trade.title")}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("divisions.trade.desc")}</p>
              <Link to={localePath("/trade")} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                {t("divisions.learn")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">{t("about.title")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">{t("about.desc")}</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: t("about.years"), label: t("about.years.desc") },
                  { value: t("about.specialists"), label: t("about.specialists.desc") },
                  { value: t("about.partnerships"), label: t("about.partnerships.desc") },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-secondary">
                    <div className="font-heading text-2xl font-bold text-accent">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={products} alt="ErokiLab Products" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Geography */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("geo.title")}</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">{t("geo.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {countries.map((c) => (
              <div key={c.key} className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-soft">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-lg font-medium text-foreground">{c.flag} {t(c.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Trust */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-16">{t("trust.title")}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustItems.map(({ icon: Icon, key }) => (
              <div key={key} className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <span className="font-heading font-semibold text-foreground text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">{t("cta.title")}</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">{t("cta.subtitle")}</p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-elevated"
          >
            {t("cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
