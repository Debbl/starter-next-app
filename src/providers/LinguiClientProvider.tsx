"use client";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { useState } from "react";
import type { Locales, Messages } from "@lingui/core";

export function LinguiClientProvider({
  children,
  locale,
  locales,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  locales?: Locales;
  messages: Messages;
}) {
  const [i18n] = useState(() =>
    setupI18n({
      locale,
      locales,
      messages: { [locale]: messages },
    }),
  );

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
