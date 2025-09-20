import { Box, Button, Container, Grid, SimpleGrid, Stack, Textarea, TextInput, useMantineColorScheme } from "@mantine/core"
import { MvList, SectionTitle } from "../components"
import { IconChevronRight } from "@tabler/icons-react"

export const ContactSection = () => {
	const colorScheme = useMantineColorScheme();

	return (
		<Box bg={colorScheme.colorScheme === 'dark' ? 'dark' : 'gray.1'} component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<Grid mb="md" align="center">
					<Grid.Col span={4}>
						<SectionTitle
							title="Lets Talk for your next project"
							subtitle="Get in touch"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis eget justo quis semper. Maecenas facilisis sapien ipsum, at malesuada ligula ultricies at."
						/>

						<MvList />
					</Grid.Col>
					<Grid.Col span={7} offset={1}>


						<form onSubmit={(event) => event.preventDefault()}>
							<Stack gap="xl">
								<SimpleGrid cols={2}>
									<TextInput size="lg" label="Your name" placeholder="Your name" required />
									<TextInput size="lg" label="Your email" placeholder="hello@mantine.dev" required />
								</SimpleGrid>

								<TextInput size="lg" label="Subject" placeholder="Subject" required />

								<Textarea
									size="lg"
									label="Your message"
									placeholder="Please include all relevant information"
									minRows={3}
								/>

								<Button
									type="submit"
									variant="filled"
									color="red"
									size="lg"
									rightSection={<IconChevronRight size={20} />}
									>Send message
								</Button>

							</Stack>
						</form>

					</Grid.Col>
				</Grid>







			

			</Container>
		</Box>	
	)
}
