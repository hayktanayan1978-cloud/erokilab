import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Shield, FileText, FlaskConical, Send, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const registrationMeta = {
  en: { title: "SGR Registration Services | ErokiLab", description: "Professional support for obtaining State Registration Certificates (SGR) for food supplements in EAEU." },
  ru: { title: "Услуги регистрации СГР | ErokiLab", description: "Профессиональная поддержка в получении свидетельств о государственной регистрации (СГР) для БАД в ЕАЭС." },
  zh: { title: "SGR 注册服务 | ErokiLab", description: "为欧亚经济联盟的膳食补充剂提供专业的国家注册证书 (SGR) 获取支持。" },
  es: { title: "Servicios de Registro SGR | ErokiLab", description: "Soporte profesional para obtener Certificados de Registro Estatal (SGR) para suplementos alimenticios en la UEE." },
};

const RegistrationPage = () => {
  const { t, localePath } = useLanguage();
  useSeoMeta(registrationMeta, "/registration");

  const whyUsItems = [
    "reg.whyus.guaranteed",
    "reg.whyus.experience",
    "reg.whyus.transparent",
    "reg.whyus.turnkey",
    "reg.whyus.lab",
  ];

  const services = [
    { icon: FileText, key: "reg.services.consulting" },
    { icon: FlaskConical, key: "reg.services.analysis" },
    { icon: FileText, key: "reg.services.dossier" },
    { icon: FlaskConical, key: "reg.services.lab" },
    { icon: Send, key: "reg.services.submission" },
    { icon: Award, key: "reg.services.issuance" },
  ];

  const steps = [
    "reg.process.step1",
    "reg.process.step2",
    "reg.process.step3",
    "reg.process.step4",
    "reg.process.step5",
  ];

  const countries = ["country.russia", "country.belarus", "country.kazakhstan", "country.armenia", "country.kyrgyzstan"];

  return (
    <>
      {/* Hero */}
      <section className="gradient-registration py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">EROKILAB REGISTRATION</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                {t("reg.hero.headline")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                {t("reg.hero.subheadline")}
              </p>
              <Link
                to={localePath("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card"
              >
                {t("reg.hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is SGR */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">{t("reg.what.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("reg.what.desc")}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">{t("reg.why.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("reg.why.desc")}</p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span key={c} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">{t(c)}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12">{t("reg.whyus.title")}</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {whyUsItems.map((key) => (
              <div key={key} className="flex items-center gap-2 bg-card rounded-xl px-6 py-4 shadow-soft">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">{t("reg.services.title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map(({ icon: Icon, key }) => (
              <div key={key} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{t(key)}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Timeline */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">{t("reg.process.title")}</h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-0 max-w-5xl mx-auto">
            {steps.map((key, i) => (
              <div key={key} className="flex items-center gap-4 lg:flex-col lg:gap-3 lg:flex-1">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg flex-shrink-0">
                  {i + 1}
                </div>
                <span className="font-heading font-medium text-foreground text-sm text-center">{t(key)}</span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-border mt-6 absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About / Mission */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">{t("reg.about.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("reg.about.mission")}</p>
          <Link
            to={localePath("/contact")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card"
          >
            {t("cta.button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
};

export default RegistrationPage;
