import { CardBento, MvSection, ResumeTable, SectionTitle } from '../components'
import classes from './ResumeSection.module.css';
import { isMobile } from 'react-device-detect';
import T from '../i18n/T.jsx';

export const ResumeSection = () => {
	return (
		<MvSection size="sm" bg>
			<div className={!isMobile && classes.circle}>
				<SectionTitle
					title={<T k="resume.title" />}
					subtitle={<T k="resume.subtitle" />}
				/>

				<CardBento bg>
					<ResumeTable />					
				</CardBento>
			</div>
		</MvSection>
	)
}
