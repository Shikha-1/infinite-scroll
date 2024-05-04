import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Text = memo(function Text({ text }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleClick = () => {
		setIsExpanded(true);
	};
	const textArr = text?.split('\n') ?? [];
	return (
		<>
			<div className='text-container'>
				{textArr?.map((line, index) => (
					<span
						key={index}
						className={index >= 0 && !isExpanded ? 'blurred' : 'text-expanded'}
					>
						{line}
					</span>
				))}
				{!isExpanded && (
					<Button
						text='...See More'
						onClick={handleClick}
						className='toggle-button'
					/>
				)}
			</div>
		</>
	);
});

Text.displayName = 'Text';

Text.propTypes = {
	text: PropTypes.string.isRequired
};

export default Text;
