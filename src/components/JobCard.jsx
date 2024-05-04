import PropTypes from 'prop-types';
import Text from './Text';
import Button from './Button';
import './styles.css';
import { capitalizeWord, findRange } from '../utils/commonUtils';

const JobCard = ({ data }) => {
	const {
		logoUrl,
		jobDetailsFromCompany,
		jobRole,
		minExp,
		maxExp,
		companyName,
		location,
		salaryCurrencyCode,
		maxJdSalary,
		minJdSalary,
		jdLink
	} = data;

	const onApply = () => {
		if (jdLink) window.open(jdLink, '_blank');
	};

	return (
		<div className='JobCard'>
			<Button
				text='Posted 6 days ago'
				className='posted-date'
			/>
			<div className='card-header'>
				<img
					src={logoUrl}
					alt='logo'
					className='logo'
				/>
				<div className='job-details'>
					<div className='name'>{companyName}</div>
					<div>{capitalizeWord(jobRole)}</div>
					<div>{capitalizeWord(location)}</div>
				</div>
			</div>
			<div className='salary'>
				Estimated Salary: {findRange(minJdSalary, maxJdSalary)}{' '}
				{salaryCurrencyCode}
			</div>
			<div className='about'>About Company:</div>
			<div className='about'>About us</div>
			<Text text={jobDetailsFromCompany} />
			<div className='experience'>Minimum Experience</div>
			<div className='experience'>{findRange(minExp, maxExp)} Years</div>
			<Button
				onClick={onApply}
				className='apply'
				text='Easy Apply'
			/>
			<Button
				className='referral'
				text='Unlock Referral Ask'
			/>
		</div>
	);
};

JobCard.propTypes = {
	data: PropTypes.shape({
		jdUid: PropTypes.string.isRequired,
		logoUrl: PropTypes.string.isRequired,
		jobDetailsFromCompany: PropTypes.string.isRequired,
		jobRole: PropTypes.string.isRequired,
		minExp: PropTypes.number,
		maxExp: PropTypes.number,
		companyName: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		salaryCurrencyCode: PropTypes.string.isRequired,
		maxJdSalary: PropTypes.number,
		minJdSalary: PropTypes.number,
		jdLink: PropTypes.string.isRequired
	}).isRequired
};

export default JobCard;
