import { useRouteError } from 'react-router-dom';
import { MvSection } from '../components';

export const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<MvSection size="sm">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</MvSection>
	)
}