import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';

import axios from 'axios';

function LinkedInSearchApp() {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ image, setImage ] = useState('');
	// const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			(async function() {
				const { data } = await axios.post('http://localhost:8000/search', {
					query: searchQuery
				});
				setImage(data);
			})();
		},
		[ searchQuery ]
	);

	return (
		<div>
			<SearchForm setSearchQuery={setSearchQuery} />
			<h1>You searched for {searchQuery}</h1>
			{/* {loading ? <h2>Loading</h2> : <img src={`data:image/png;base64, ${image}`} alt="" />} */}
			<img src={`data:image/png;base64, ${image}`} alt="" />
		</div>
	);
}

export default LinkedInSearchApp;
