import { useRef } from 'react';
import { Divider, Grid, Image } from '@mantine/core';
import { GroupBadge, MvSection, SectionTitle } from '../components';
import T from '../i18n/T.jsx';

export const AboutSection = () => {
	// Palabras candidatas: agregá o quitá a gusto
	const variants = useRef(['bits', 'draw', 'glass', 'paint', 'toy']);
	const pickOnce = useRef(
		variants.current[Math.floor(Math.random() * variants.current.length)]
	);

	const imageSrc = `martin_vera_${pickOnce.current}.webp`;

	return (
		<MvSection>
			<Grid mb="md" align="center">
				<Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
					<SectionTitle
						title={<T k="about.title" />}
						subtitle={<T k="about.subtitle" />}
						text={<T k="about.text" />}
					/>
					<Divider my="xl" />
					<GroupBadge />
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 12, lg: 5 }} offset={{ md: 0, lg: 1 }}>
					<Image
						h={{ xs: 200, sm: 600 }}
						radius="md"
						src={imageSrc}
						alt="Tincho Vera"
					/>
				</Grid.Col>
			</Grid>
		</MvSection>
	);
};
