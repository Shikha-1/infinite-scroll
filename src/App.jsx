import { useEffect, useRef, useCallback } from 'react';
import { createRequestOptions } from './hooks/createRequestOptions.js';
import { useFetchData } from './hooks/useFetchData.js';
import { useIntersectionObserver } from './hooks/useIntersectionObserver.js';
import JobCard from './components/JobCard.jsx';
import './App.css';

const App = () => {
	const { loading, error, postData, fetchData, page, totalPageCount } =
		useFetchData();

	const observerCallback = useCallback(
		([entry]) => {
			if (entry.isIntersecting && !loading && !error) {
				const newPage = page + 1;
				if (newPage <= totalPageCount) {
					const newRequestOptions = createRequestOptions(8, newPage);
					fetchData(newRequestOptions, newPage);
				}
			}
		},
		[loading, error, fetchData, page, totalPageCount]
	);

	const observerOptions = {
		threshold: 0.5
	};

	const sentinelRef = useRef(null);
	const observer = useIntersectionObserver(observerCallback, observerOptions);

	useEffect(() => {
		if (sentinelRef?.current) {
			observer?.observe(sentinelRef?.current);
		}
		return () => {
			if (sentinelRef.current) {
				observer?.unobserve(sentinelRef?.current);
			}
		};
	}, [observer]);

	return (
		<div className='App'>
			{postData?.map((item) => (
				<JobCard
					data={item}
					key={item?.jdUid}
				/>
			))}
			<div
				ref={sentinelRef}
				style={{ height: '10px', background: 'transparent' }}
			/>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error?.message ?? 'Something went wrong!'}</div>}
		</div>
	);
};

export default App;
