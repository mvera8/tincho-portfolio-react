import { Card, Grid, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core"
import { Each, MvSection, SectionTitle } from "../components"
import { IconBrandWordpress, IconBrush, IconChessBishop, IconDeviceMobile, IconMovie, IconSettings2, IconShoppingCart, IconTopologyRing3 } from "@tabler/icons-react"
import { useI18n } from "../i18n/useI18n.js";
import T from "../i18n/T.jsx";

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
  const itemsRaw = get("services.items");
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];
  if (items.length === 0) return null;

  return (
    <MvSection>
			<SectionTitle
				title={<T k="services.title" />}
				subtitle={<T k="services.subtitle" />}
				centerText
			/>
			<SimpleGrid cols={2}>
				<Each
					of={items}
					render={({ title, icon, description }, idx) => {
						const IconCmp = ICONS[icon] ?? IconBrandWordpress;
						return (
							<Card
								key={idx}
								radius="md"
								padding={{ md: "sm", lg: "xl"}}
								component="a"
								href="/service-post"
								withBorder
							>
								<Grid>
									<Grid.Col span={{ base: 12, md: 12, lg: 2 }}>
										<Text size="xl" c="gray">.0{idx + 1}</Text>
									</Grid.Col>
									<Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
										<Title order={4} c="gray">{title}</Title>
										<Text c="dimmed" truncate="end">{description}</Text>
									</Grid.Col>
									<Grid.Col span={{ base: 12, md: 12, lg: 2 }} ta={{ md: "center", lg: "end"}}>
										<ThemeIcon variant="light" color="red" radius="xl" size="xl">
											<IconCmp size={22} />
										</ThemeIcon>
									</Grid.Col>
								</Grid>
							</Card>
						);
					}}
				/>
			</SimpleGrid>
    </MvSection>
  );
};
