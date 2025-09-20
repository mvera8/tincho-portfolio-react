import { useI18n } from "./useI18n";

// Uso: <T k="home.subtitle" values={{ name: 'Tincho' }} />
export default function T({ k, values }) {
  const { t } = useI18n();
  return t(k, values);
}
