import { getRootLayout } from "~/app/RootLayout";

export { metadata } from "~/app/RootLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const Layout = getRootLayout("en");

  return <Layout>{children}</Layout>;
}
