import { PropTypes } from 'prop-types';
import './styles.css';

function OptionList({ options, onOptionSelect }) {
	return (
		<div className='OptionList'>
			{options?.map((item) => (
				<div
					onClick={onOptionSelect}
					key={item}
					className='option'
				>
					{item}
				</div>
			))}
		</div>
	);
}

OptionList.propTypes = {
	options: PropTypes.Array.isRequired,
	onOptionSelect: PropTypes.func.isRequired
};

export default OptionList;
