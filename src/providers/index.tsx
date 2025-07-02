import { setI18n } from '@lingui/react/server'
import { domMax, LazyMotion } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import { getI18nInstance } from '~/i18n'
import ProvidersClient from './index.client'

export interface ProvidersProps {
  lang: string
  children: React.ReactNode
}

export function Providers({ lang, children }: ProvidersProps) {
  const i18n = getI18nInstance(lang)
  setI18n(i18n)

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <ProvidersClient lang={lang}>
        <LazyMotion strict features={domMax}>
          {children}
        </LazyMotion>
      </ProvidersClient>
    </ThemeProvider>
  )
}
