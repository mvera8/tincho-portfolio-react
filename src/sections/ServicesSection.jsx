import { Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core'
import { CardLink, Each, MvSection, SectionTitle } from '../components'
import { IconBrandWordpress, IconBrush, IconChessBishop, IconDeviceMobile, IconMovie, IconSettings2, IconShoppingCart, IconTopologyRing3 } from '@tabler/icons-react'
import { useI18n } from '../i18n/useI18n.js';
import T from '../i18n/T.jsx';

const ICONS = {
	IconDeviceMobile,
	IconBrush,
	IconMovie,
	IconSettings2,
	IconShoppingCart,
	IconTopologyRing3,
	IconChessBishop,
};

export const ServicesSection = () => {
	const { get } = useI18n();
	const itemsRaw = get('services.items');
	const items = Array.isArray(itemsRaw) ? itemsRaw : [];
	if (items.length === 0) return null;

	return (
		<MvSection>
			<SectionTitle
				title={<T k="services.title" />}
				subtitle={<T k="services.subtitle" />}
				centerText
			/>
			<SimpleGrid cols={{ base: 1, sm: 2 }}>
				<Each
					of={items}
					render={({ slug, title, icon, description }, idx) => {
						const IconCmp = ICONS[icon] ?? IconBrandWordpress;
						return (
							<CardLink key={idx} link={`/services/${slug}`}>
								<Grid p="md" pb={0}>
									<Grid.Col span={{ base: 2, md: 2 }} order={{ base: 2, sm: 1 }}>
										<Text size="xl" c="gray">.0{idx + 1}</Text>
									</Grid.Col>
									<Grid.Col span={{ base: 10, md: 8 }} order={{ base: 3, sm: 2 }}>
										<Title order={4} c="gray" mb="xs">{title}</Title>
										<Text c="dimmed">{description}</Text>
									</Grid.Col>
									<Grid.Col span={{ base: 12, md: 12, lg: 2 }} ta={{ md: 'center', lg: 'end'}} order={{ base: 1, sm: 3 }}>
										<ThemeIcon variant="light" color="red" radius="xl" size="xl">
											<IconCmp size={22} />
										</ThemeIcon>
									</Grid.Col>
								</Grid>
							</CardLink>
						);
					}}
				/>
			</SimpleGrid>
		</MvSection>
	);
};
