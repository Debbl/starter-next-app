import { setI18n } from "@lingui/react/server";
import { ThemeProvider } from "next-themes";
import { getI18nInstance } from "~/i18n";
import { domMax, LazyMotion } from "~/lib/motion";
import { LinguiClientProvider } from "./LinguiClientProvider";

export interface ProvidersProps {
  lang: string;
  children: React.ReactNode;
}

export function Providers({ lang, children }: ProvidersProps) {
  const i18n = getI18nInstance(lang);
  setI18n(i18n);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LinguiClientProvider
        locale={lang}
        locales={i18n.locales}
        messages={i18n.messages}
      >
        <LazyMotion strict features={domMax}>
          {children}
        </LazyMotion>
      </LinguiClientProvider>
    </ThemeProvider>
  );
}
