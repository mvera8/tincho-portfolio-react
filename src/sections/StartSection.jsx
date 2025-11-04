import { Center } from '@mantine/core';
import { MvButton, MvSection, SectionTitle } from '../components'
import T from '../i18n/T.jsx';

export const StartSection = () => {
	return (
		<MvSection size="xs">
			<SectionTitle
				title={<T k="start.title" />}
				subtitle={<T k="start.subtitle" />}
				centerText
			/>

			<Center>
				<MvButton
					text={<T k="start.btn" />}
					link="/contact"
					variant="filled"
				/>
			</Center>
		</MvSection>
	)
}
