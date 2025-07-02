import { getRootLayout } from '~/app/root-layout'

export { metadata } from '~/app/root-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  const Layout = getRootLayout('en')

  return <Layout>{children}</Layout>
}
