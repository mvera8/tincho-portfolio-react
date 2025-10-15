import { List, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { useI18n } from '../i18n/useI18n.js';
import { Each } from './Each.jsx';

export const MvList = () => {
	const { get } = useI18n();
	const itemsRaw = get('list.items');
	const items = Array.isArray(itemsRaw) ? itemsRaw : [];

	return (
		<List
			my="xl"
			spacing="xs"
			center
			icon={
				<ThemeIcon color="teal" size={30} radius="xl">
					<IconCheck size={20} />
				</ThemeIcon>
			}
		>
			{items.length > 0 &&
				<Each
					of={items}
					render={(item, index) => (
						<List.Item key={index}>{item}</List.Item>
					)}
				/>
			}	
		</List>
	)
}
