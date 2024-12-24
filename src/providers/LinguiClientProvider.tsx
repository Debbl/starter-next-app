"use client";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { useState } from "react";
import type { Messages } from "@lingui/core";

export function LinguiClientProvider({
  children,
  locale,
  locales,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  locales: string[];
  messages: { [k: string]: Messages };
}) {
  const [i18n] = useState(() =>
    setupI18n({
      locale,
      locales,
      messages,
    }),
  );

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
