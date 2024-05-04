import { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const Button = memo(function Button(props) {
	const { onClick, className, component, text } = props;

	return (
		<button
			onClick={onClick || (() => null)}
			className={`Button ${className || ''}`}
		>
			{component && <span>{component}</span>}
			{text}
		</button>
	);
});

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	component: PropTypes.element
};

export default Button;
