import { createTheme, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CVPage, ErrorPage, HomePage, BlogPostPage, PortfolioPostPage, BlogPage, TestPage, ServicesPostPage, BentoGridPage, ContactPage, ServicesPage, PortfolioPage } from './pages';
import LanguageProvider from './i18n/LanguageProvider';

import '@mantine/core/styles.css';

const theme = createTheme({
	fontFamily: 'Open Sans, sans-serif',
	primaryColor: 'red',
	colors: {
		'red': [
			'#fceeef',
			'#f2d9da',
			'#e8afb2',
			'#df8286',
			'#f44d6d', // primary
			'#d3454a',
			'#d2393e',
			'#ba2d31',
			'#a90024',
			'#8e1b22'
		],
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'services',
		element: <ServicesPage />,
	},
	{
		path: 'services/:slug',
		element: <ServicesPostPage />,
	},
	{
		path: 'portfolio',
		element: <PortfolioPage />,
	},
	{
		path: 'portfolio/:slug',
		element: <PortfolioPostPage />,
	},
	{
		path: 'blog',
		element: <BlogPage />,
	},
	{
		path: 'blog/:slug',
		element: <BlogPostPage />,
	},
	{
		path: 'contact',
		element: <ContactPage />,
	},
	{
		path: 'test',
		element: <TestPage />,
	},
	{
		path: 'bento',
		element: <BentoGridPage />,
	},
	{
		path: 'cv',
		element: <CVPage />,
	}
]);

export default function App() {
	return (
		<MantineProvider theme={theme}>
			<LanguageProvider>
				<RouterProvider router={router} />
			</LanguageProvider>
		</MantineProvider>
	);
}