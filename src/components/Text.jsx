import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Text = memo(function Text({ text }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	const textArr = text?.split(' ') ?? [];
	const containerClassName =
		textArr.length > 15 && !isExpanded
			? 'text-container'
			: 'text-container-expanded';
	return (
		<>
			<div className={containerClassName}>
				{textArr?.map((line, index) => (
					<span
						key={index}
						className={index > 15 && !isExpanded ? 'blurred' : 'text-expanded'}
					>
						{line + ' '}
					</span>
				))}
				<Button
					text={`...See ${isExpanded ? 'Less' : 'More'}`}
					onClick={handleClick}
					className='toggle-button'
				/>
			</div>
		</>
	);
});

Text.displayName = 'Text';

Text.propTypes = {
	text: PropTypes.string.isRequired
};

export default Text;
