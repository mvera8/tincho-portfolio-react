import { useEffect, useMemo, useState, useCallback } from 'react';
import { I18nContext } from './I18nContext.js';
import esFallback from '../locales/es.json';
import PropTypes from 'prop-types';

const loaders = {
	en: () => import('../locales/en.json'),
	es: () => import('../locales/es.json'),
};

const SUPPORTED = ['en', 'es'];
const STORAGE_KEY = 'lang';

/** Elegir idioma inicial de forma segura (SSR-friendly) */
function pickInitialLang() {
	try {
		if (typeof window !== 'undefined') {
			const saved = window.localStorage.getItem(STORAGE_KEY);
			if (saved && SUPPORTED.includes(saved)) return saved;

			const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
			const first = String(langs[0] || 'es').split('-')[0].toLowerCase();
			if (SUPPORTED.includes(first)) return first;
		}
	} catch (e) {
		// si algo falla (p. ej. acceso a localStorage), caemos al fallback
		// console.warn('pickInitialLang error', e);
	}

	// fallback por defecto
	return 'es';
}

/** Interpolación simple {name} */
function interpolate(str, values = {}) {
	return str.replace(/\{(\w+)\}/g, (_, k) => {
		const v = values[k];
		return v === undefined || v === null ? '' : String(v);
	});
}

function LanguageProvider({ children }) {
	const [lang, setLangRaw] = useState(pickInitialLang);
	const [dict, setDict] = useState(esFallback);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let cancelled = false;
		setReady(false);

		try {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(STORAGE_KEY, lang);
			}
		} catch (e) {
			// ignore localStorage write errors
		}

		const loader = loaders[lang] || loaders.es;
		loader()
			.then((mod) => {
				if (!cancelled) {
					setDict(mod.default || mod);
					setReady(true);
				}
			})
			.catch(() => {
				if (!cancelled) {
					setDict(esFallback);
					setReady(true);
				}
			});

		return () => { cancelled = true; };
	}, [lang]);

	// sincronizar <html lang="..."> (accesibilidad + SEO)
	useEffect(() => {
		try {
			if (typeof document !== 'undefined' && document.documentElement) {
				document.documentElement.lang = lang;
			}
		} catch (e) {
			// noop
		}
	}, [lang]);

	// validar y persistir mediante wrapper
	const setLang = useCallback((next) => {
		const normalized = String(next || '').slice(0, 2).toLowerCase();
		const value = SUPPORTED.includes(normalized) ? normalized : 'es';
		setLangRaw(value);
		try {
			if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, value);
		} catch (e) {
			// ignore
		}
	}, []);

	const pluralRules = useMemo(() => new Intl.PluralRules(lang), [lang]);

	const getRaw = useCallback((key) => {
		const val = dict?.[key];
		if (val !== undefined) return val;
		const fb = esFallback?.[key];
		return fb !== undefined ? fb : key;
	}, [dict]);

	const t = useCallback((key, values = {}) => {
		const raw = getRaw(key);
		if (raw && typeof raw === 'object' && values && 'count' in values) {
			const cat = pluralRules.select(Number(values.count));
			const template = raw[cat] ?? raw.other ?? '';
			return interpolate(template, values);
		}
		if (typeof raw === 'string') return interpolate(raw, values);
		return key;
	}, [getRaw, pluralRules]);

	const get = useCallback((key) => getRaw(key), [getRaw]);

	const value = useMemo(
		() => ({ lang, setLang, t, get, ready }),
		[lang, setLang, t, get, ready]
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

LanguageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LanguageProvider;
