import { Text, Title } from '@mantine/core';
import PropTypes from 'prop-types';
import { TextDimmed } from './TextDimmed';

export const SectionTitle = ({ title, subtitle, text, centerText = false }) => {
  const ta = centerText ? 'center' : 'left';

  return (
    <>
      {subtitle && (
				<TextDimmed text={subtitle} align={ta} />
      )}

      {title && (
        <Title
          order={2}
          size="h1"
          mb="lg"
					tt="capitalize"
          maw={500}
          ta={ta}
          mx={centerText ? 'auto' : undefined}
        >
          {title}
        </Title>
      )}

			{text && (
				<Text size="lg">{text}</Text>
      )}
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
	text:  PropTypes.string,
  centerText: PropTypes.bool,
};
