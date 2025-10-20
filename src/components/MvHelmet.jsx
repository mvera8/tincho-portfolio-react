import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const BASE = 'https://martinvera.com.uy';

function normalizeSlug(slug) {
	if (!slug) return '';
	const s = String(slug).replace(/^\/+|\/+$/g, '');
	return s ? `/${s}` : '';
}

export const MvHelmet = ({ page, slug }) => {
	const isHome = !slug;
	const path = normalizeSlug(slug);
	const url = `${BASE}${path || '/'}`;

	const siteName = 'Martín Vera';
	const defaultTitle = 'Martín Vera | Desarrollador Web';
	const title = isHome
		? defaultTitle
		: `${page ? `${page} | ` : ''}${siteName}`;
	const description =
    'Desarrollador web en Uruguay. Proyectos reales: React, WordPress, integraciones y dashboards.';
	const ogImage = `${BASE}/site.webp`;

	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Martín Vera',
		jobTitle: 'Desarrollador Web',
		url: BASE,
		image: `${BASE}/martinvera.webp`,
		description:
      'Desarrollador web especializado en React, WordPress y automatización, con sede en Uruguay.',
		sameAs: [
			'https://www.linkedin.com/in/tincho8/',
			'https://github.com/mvera8',
			'https://www.behance.net/martinverauy',
			'https://www.pinterest.com/tinchovera8/',
			'https://www.instagram.com/martinverauy/'
		]
	};

	const websiteJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: BASE,
		name: siteName,
		inLanguage: 'es',
		potentialAction: {
			'@type': 'SearchAction',
			target: `${BASE}/buscar?q={search_term_string}`,
			'query-input': 'required name=search_term_string'
		}
	};

	// (Opcional) Breadcrumbs si tenés jerarquía de páginas
	const collectionJsonLd = {
		'@context': 'https://schema.org',
		'@type': isHome ? 'WebPage' : 'CollectionPage',
		name: title,
		description,
		url
	};

	return (
		<Helmet>
			{/* Título/Descripción */}
			<title>{title}</title>
			<meta name="description" content={description} />

			{/* Canonical */}
			<link rel="canonical" href={url} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={ogImage} />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{/* JSON-LD */}
			<script type="application/ld+json">
				{JSON.stringify(websiteJsonLd)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(personJsonLd)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(collectionJsonLd)}
			</script>
		</Helmet>
	);
};

MvHelmet.propTypes = {
	page: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	slug: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
