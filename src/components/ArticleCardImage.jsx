import { Paper, Text, Title } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

export const ArticleCardImage = () => {
	return (
		<Paper shadow="md" p="xl" radius="md" className={classes.card}>
			<div>
				<Text className={classes.category} size="xs">
          nature
				</Text>
				<Title order={3} className={classes.title} mb="md">
          Best forests to visit in North America
				</Title>
			</div>
		</Paper>
	);
}