import { getRootLayout } from "~/app/RootLayout";
import { locales, sourceLocale } from "~/i18n";

export { metadata } from "~/app/RootLayout";

export async function generateStaticParams() {
  return locales
    .filter((l) => l !== sourceLocale)
    .map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  params: Promise<{
    lang: string;
  }>;
  children: React.ReactNode;
}

export default async function Layout({ params, children }: LayoutProps) {
  const { lang } = await params;
  const RootLayout = getRootLayout(lang);

  return <RootLayout>{children}</RootLayout>;
}
