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
    <img alt="header" src="./images/bg-header-desktop.svg" />
    </header>
    <div className="container m-auto">
			{jobs.length === 0 ? (
				<p>Searching...</p>
			) : (
				jobs.map((job) => <JobBoard job={job} key={job.id} />)
			)}
      </div>
		</div>
	);
}

export default App;
