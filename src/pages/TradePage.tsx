import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, CheckCircle, Factory, Pill, Tag, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import flacons from "@/assets/erokilab-flacons.jpeg";

const TradePage = () => {
  const { t, localePath } = useLanguage();

  useEffect(() => {
    document.title = "European Supplement Distribution | ErokiLab";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "ErokiLab sources and distributes European-made food supplements across the EAEU market.");
  }, []);

  const whatWeDo = [
    { icon: Factory, key: "trade.what.manufacturing", desc: "trade.what.manufacturing.desc" },
    { icon: Pill, key: "trade.what.supplements", desc: "trade.what.supplements.desc" },
    { icon: Tag, key: "trade.what.private", desc: "trade.what.private.desc" },
    { icon: BarChart3, key: "trade.what.expertise", desc: "trade.what.expertise.desc" },
  ];

  const advantages = [
    "trade.advantages.quality",
    "trade.advantages.compliance",
    "trade.advantages.moq",
    "trade.advantages.pricing",
    "trade.advantages.logistics",
    "trade.advantages.partnership",
  ];

  const productCategories = [
    "trade.products.vitamins",
    "trade.products.probiotics",
    "trade.products.immune",
    "trade.products.sports",
    "trade.products.liquid",
    "trade.products.single",
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-trade py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">ErokiLab Trade</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                {t("trade.hero.headline")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t("trade.hero.subheadline")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card"
                >
                  {t("trade.hero.cta1")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={localePath("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-card transition-colors"
                >
                  {t("trade.hero.cta2")}
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <img src={flacons} alt="ErokiLab Products" className="rounded-2xl shadow-elevated w-full" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">{t("trade.what.title")}</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatWeDo.map(({ icon: Icon, key, desc }) => (
              <div key={key} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t(key)}</h3>
                <p className="text-sm text-muted-foreground">{t(desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Advantages */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12">{t("trade.advantages.title")}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {advantages.map((key) => (
              <div key={key} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-soft">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Product Categories */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">{t("trade.products.title")}</h2>
          <p className="text-center text-muted-foreground mb-12">{t("trade.products.note")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {productCategories.map((key) => (
              <div key={key} className="gradient-trade rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
                <Pill className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground">{t(key)}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Partnership CTA */}
      <AnimatedSection className="py-24 gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">{t("trade.partnership.title")}</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-lg mx-auto">{t("trade.partnership.desc")}</p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-elevated"
          >
            {t("trade.partnership.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
};

export default TradePage;
