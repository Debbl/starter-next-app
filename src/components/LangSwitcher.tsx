import { useLingui } from "@lingui/react";

export function LangSwitcher() {
  const { i18n } = useLingui();
  return <div>{i18n.locale}</div>;
}
