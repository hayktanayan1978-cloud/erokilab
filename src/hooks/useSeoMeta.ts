import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";

interface SeoMeta {
  [lang: string]: { title: string; description: string };
}

const BASE_URL = "https://erokilab.com";

export function useSeoMeta(meta: SeoMeta, pagePath: string = "") {
  const { lang } = useLanguage();

  useEffect(() => {
    const current = meta[lang] || meta.en;
    if (current) {
      document.title = current.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", current.description);
    }

    // Manage hreflang tags
    const langs: Lang[] = ["en", "ru", "zh", "es"];
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    langs.forEach((l) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l;
      link.href = `${BASE_URL}/${l}${pagePath}`;
      document.head.appendChild(link);
    });

    // x-default → English
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.href = `${BASE_URL}/en${pagePath}`;
    document.head.appendChild(xDefault);

    return () => {
      document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());
    };
  }, [lang, meta, pagePath]);
}
