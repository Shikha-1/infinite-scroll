import { memo } from 'react';
import './styles.css';

const Loader = memo(function Loader() {
	return (
		<div className='Loader'>
			<div className='loading' />
		</div>
	);
});

export default Loader;
