import { Accordion } from '@mantine/core'
import { MvSection, SectionTitle } from '../components';
import PropTypes from 'prop-types';
import T from '../i18n/T.jsx';

export const FaqsSection = ({ faqs }) => {
	if (!faqs || faqs.length === 0) {
		return null;
	}

	return (
		<MvSection size="sm">
			<SectionTitle
				title={<T k="faqs.title" />}
				subtitle={<T k="faqs.subtitle" />}
				centerText
			/>

			<Accordion variant="separated">
				{faqs.map((faq, index) => (
					<Accordion.Item key={index} value={`faq-${index}`}>
						<Accordion.Control>{faq.question}</Accordion.Control>
						<Accordion.Panel>{faq.answer}</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</MvSection>
	)
}

FaqsSection.propTypes = {
	faqs: PropTypes.arrayOf(
		PropTypes.shape({
			question: PropTypes.string.isRequired,
			answer: PropTypes.string.isRequired,
		})
	),
};