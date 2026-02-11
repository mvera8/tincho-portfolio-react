import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Badge, Button, Grid, SimpleGrid, Stack } from '@mantine/core';
import { MvInput, MvList, MvSection, SectionTitle } from '../components';
import { useI18n } from '../i18n/useI18n';
import { useDisclosure } from '@mantine/hooks';
import useWeb3Forms from '@web3forms/react';
import T from '../i18n/T.jsx';

export const WebFormSection = () => {
	const { t } = useI18n();
	const {register, reset, handleSubmit} = useForm();

	const [isDisabled] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [result, setResult] = useState(null);
	const [loading, { toggle }] = useDisclosure();

	const { submit } = useWeb3Forms({
		access_key: import.meta.env.VITE_TU_WEB3FORMS_ACCESS_KEY,
		settings: {
			from_name: 'MARTINVERA',
		},
		onSuccess: (msg, data) => {
			setIsSuccess(true);
			setResult(msg);
			reset();
			toggle();
		},
		onError: (msg, data) => {
			setIsSuccess(false);
			setResult(msg);
			toggle();
		},
	});

	// ⭐ Función custom que recibe los datos del formulario
	const onSubmit = async (data) => {
		toggle(); // Activar loading
		
		// Agregar el subject dinámico
		const formDataWithSubject = {
			...data,
			subject: `From martinvera.com.uy: ${data.subject}`,
		};
		
		await submit(formDataWithSubject);
	};
	
	return (
		<MvSection bg>
			<Grid mb="md" align="center">
				<Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
					<SectionTitle
						title={<T k="contact.title" />}
						subtitle={<T k="contact.subtitle" />}
						text={<T k="contact.text" />}
					/>
					<MvList />
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 12, lg: 7 }} offset={{ md: 0, lg: 1 }}>
					{isDisabled &&
						<Badge variant="dot" color="red" mb="md"><T k="contact.status" /></Badge>
					}
			
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack gap="md">
							<SimpleGrid cols={{ base: 1, md: 1, lg: 2 }} mb={0}>
								<MvInput
									label={t('contact.input.name')}
									placeholder={t('contact.input.name')}
									name="name"
									disabled={isDisabled}
									register={register}
								/>
	
								<MvInput
									label={t('contact.input.email')}
									placeholder={t('contact.input.email')}
									name="email"
									type="email"
									disabled={isDisabled}
									register={register}
								/>
							</SimpleGrid>

							<MvInput
								label={t('contact.input.subject')}
								placeholder={t('contact.input.subject')}
								name="subject"
								disabled={isDisabled}
								register={register}
							/>				
	
							<MvInput
								label={t('contact.input.message')}
								placeholder={t('contact.input.message')}
								name="message"
								type="textarea"
								disabled={isDisabled}
								register={register}
							/>

							<Button
								type="submit"
								size="xl"
								radius="md"
								disabled={isDisabled}
								loading={loading}>
								<T k="contact.input.btn" />
							</Button>

							{result &&
								<Alert variant="light" color={isSuccess ? 'green' : 'red' } title={result} />
							}
						</Stack>
					</form>
				</Grid.Col>
			</Grid>
		</MvSection>
	)
}
