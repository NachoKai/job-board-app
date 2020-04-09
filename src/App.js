import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoard from './components/Jobboard/JobBoard';

function App() {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		setJobs(data);
	}, []);

	return (
		<div className="App">
    <header className='bg-teal-500 mb-'>
    <img src="/images/bg-header-desktop.svg" />
    </header>
			{jobs.length === 0 ? (
				<p>Searching...</p>
			) : (
				jobs.map((job) => <JobBoard job={job} key={job.id} />)
			)}
		</div>
	);
}

export default App;
