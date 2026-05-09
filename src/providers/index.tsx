import { domMax, LazyMotion } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import { SerwistProvider } from './serwist-provider'

// eslint-disable-next-line n/prefer-global/process
const isDev = process.env.NODE_ENV === 'development'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SerwistProvider swUrl='/sw.js' disable={isDev}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <LazyMotion strict features={domMax}>
          {children}
        </LazyMotion>
      </ThemeProvider>
    </SerwistProvider>
  )
}
