import { Accordion, Box, Container } from '@mantine/core'
import { SectionTitle } from '../components';


const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';


export const FaqsSection = () => {
	return (
		<Box component="section" py="xl">
			<Container size="sm" py="xl" mb="xl">
				<SectionTitle
					title="Frequently Asked Questions"
					subtitle="FAQs"
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
			</Container>
		</Box>
	)
}
