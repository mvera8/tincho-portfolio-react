import { Box, Container } from '@mantine/core';
import { useRouteError } from 'react-router-dom';
import { ContactSection } from './sections';
import { Footer, Navbar } from './components';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<Navbar />
			<Box id="error-page" component="section" py="xl">
				<Container size="sm" py="xl" mb="xl">
					<h1>Oops!</h1>
					<p>Sorry, an unexpected error has occurred.</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				</Container>
			</Box>
			<ContactSection />
			<Footer />
		</>
	);
}