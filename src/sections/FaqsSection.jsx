import { Accordion } from '@mantine/core'
import { MvSection, SectionTitle } from '../components';
import T from "../i18n/T.jsx";

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export const FaqsSection = () => {
	return (
		<MvSection size="sm">
			<SectionTitle
				title={<T k="faqs.title" />}
				subtitle={<T k="faqs.subtitle" />}
				centerText
			/>

			<Accordion variant="separated">
				<Accordion.Item value="reset-password">
					<Accordion.Control>How can I reset my password?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="another-account">
					<Accordion.Control>Can I create more that one account?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="newsletter">
					<Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="credit-card">
					<Accordion.Control>Do you store credit card information securely?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="payment">
					<Accordion.Control>What payment systems to you work with?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</MvSection>
	)
}
