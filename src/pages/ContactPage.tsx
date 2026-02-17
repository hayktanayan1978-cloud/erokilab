import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Send, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast.success(t("contact.success") || "Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", country: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("contact.error") || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
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
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-turquoise-hover transition-colors shadow-card disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {t("contact.submit")}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPage;
