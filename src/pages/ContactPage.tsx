import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const ContactPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", country: "", message: "" });
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-center text-muted-foreground mb-12">info@erokilab.com · +374 XX XXX XXX</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { key: "name", type: "text" },
                { key: "email", type: "email" },
                { key: "phone", type: "tel" },
                { key: "country", type: "text" },
              ].map(({ key, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t(`contact.${key}`)}
                  </label>
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card"
              >
                {t("contact.submit")}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPage;
