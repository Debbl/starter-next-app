import { setI18n } from '@lingui/react/server'
import { getI18nInstance } from '~/i18n'
import { LinguiClientProvider } from './lingui-client-provider'
import type { ProvidersProps } from './index'

export default function ProvidersClient({ lang, children }: ProvidersProps) {
  const i18n = getI18nInstance(lang)
  setI18n(i18n)

  return (
    <LinguiClientProvider
      locale={lang}
      locales={i18n.locales}
      messages={i18n.messages}
    >
      {children}
    </LinguiClientProvider>
  )
}
