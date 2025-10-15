import { useEffect, useMemo, useState, useCallback } from 'react';
import { I18nContext } from './I18nContext.js';
import enFallback from '../locales/es.json';
import PropTypes from 'prop-types';

const loaders = {
	en: () => import('../locales/en.json'),
	es: () => import('../locales/es.json'),
};

const SUPPORTED = ['en', 'es'];

function pickInitialLang() {
	const saved = localStorage.getItem('lang');
	if (saved && SUPPORTED.includes(saved)) return saved;
	const nav = (navigator.language || 'en').split('-')[0];
	return SUPPORTED.includes(nav) ? nav : 'en';
}

function interpolate(str, values = {}) {
	return str.replace(/\{(\w+)\}/g, (_, k) => {
		const v = values[k];
		return v === undefined || v === null ? '' : String(v);
	});
}

function LanguageProvider({ children }) {
	const [lang, setLang] = useState(pickInitialLang());
	const [dict, setDict] = useState(enFallback);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let cancelled = false;
		setReady(false);
		localStorage.setItem('lang', lang);

		(loaders[lang] || loaders.en)()
			.then((mod) => {
				if (!cancelled) {
					setDict(mod.default || mod);
					setReady(true);
				}
			})
			.catch(() => {
				if (!cancelled) {
					setDict(enFallback);
					setReady(true);
				}
			});

		return () => { cancelled = true; };
	}, [lang]);

	const pluralRules = useMemo(() => new Intl.PluralRules(lang), [lang]);

	const getRaw = useCallback((key) => {
		const val = dict?.[key];
		if (val !== undefined) return val;
		const fb = enFallback?.[key];
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
		[lang, t, get, ready]
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

LanguageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LanguageProvider;
