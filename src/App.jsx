import { createTheme, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, PostPage, PortfolioPostPage, BlogPage, TestPage, ServicePostPage, BentoGridPage } from './pages';
import ErrorPage from './error-page';
import LanguageProvider from './i18n/LanguageProvider';

import '@mantine/core/styles.css';

const theme = createTheme({
	fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'red',
	colors: {
    'red': [
			"#fceeef",
			"#f2d9da",
			"#e8afb2",
			"#df8286",
			"#d75c62",
			"#d3454a",
			"#d2393e",
			"#ba2d31",
			"#a6262b",
			"#8e1b22"
		],
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
		errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
	{
    path: "post",
    element: <PostPage />,
  },
  {
    path: "portfolio-post",
    element: <PortfolioPostPage />,
  },
  {
    path: "service-post",
    element: <ServicePostPage />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "bento",
    element: <BentoGridPage />,
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