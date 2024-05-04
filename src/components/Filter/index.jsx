import { useState } from 'react';
import { PropTypes } from 'prop-types';
import OptionList from '../OptionList';
import './styles.css';

function Filter({ placeholder, options, onSelect }) {
	const [active, setActive] = useState(false);

	return (
		<div className={`Filter ${active ? 'active' : ''}`}>
			<input
				className='filter-input'
				placeholder={placeholder}
				alt={placeholder}
				onBlur={() => setActive(false)}
				onFocus={() => setActive(true)}
			/>
			<span className={`icon ${active ? 'active-icon' : ''}`}>&#11167;</span>
			{active && (
				<OptionList
					options={options}
					onOptionSelect={onSelect}
				/>
			)}
		</div>
	);
}

Filter.propTypes = {
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.Array.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default Filter;
