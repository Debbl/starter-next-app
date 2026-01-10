import { domMax, LazyMotion } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import { SerwistProvider } from './serwist-provider'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SerwistProvider swUrl='/serwist/sw.js'>
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
