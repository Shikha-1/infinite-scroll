import { useMemo } from 'react';
import { useFetch, createRequestOptions } from './hooks/useFetch';
import JobCard from './components/JobCard.jsx';
import './App.css';

const App = () => {
	const requestOptions = useMemo(() => createRequestOptions(8, 0), []);

	const { data, loading, error } = useFetch(
		'https://api.weekday.technology/adhoc/getSampleJdJSON',
		requestOptions
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className='App'>
			{data.jdList.map((item) => (
				<JobCard
					data={item}
					key={item.jdUid}
				/>
			))}
		</div>
	);
};

export default App;
