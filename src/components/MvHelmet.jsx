import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const MvHelmet = ({page, slug}) => {
	const title = `${page} | Martin Vera`;
	const description = 'Mirá proyectos reales: frontends en React, integraciones, dashboards y más.';
	const url = `https://martinvera.com.uy/${slug}`;
	const ogImage = `https://martinvera.com.uy/${slug}.jpg`;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
		
			{/* Canonical */}
			<link rel="canonical" href={url} />
		
			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={ogImage} />
		
			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
		
			{/* (Opcional) JSON-LD */}
			<script type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: title,
					description,
					url,
				})}
			</script>
		</Helmet>
	)
}

MvHelmet.propTypes = {
	page:  PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	slug:  PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
