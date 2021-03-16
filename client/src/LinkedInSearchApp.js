import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import Loading from './Loading';
import './LinkedInSearchApp.css';

import axios from 'axios';

function LinkedInSearchApp() {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ image, setImage ] = useState('');
	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			if (searchQuery) {
				(async function() {
					setLoading(true);
					const { data } = await axios.post('http://localhost:8000/search', {
						query: searchQuery
					});
					setLoading(false);
					setImage(data);
				})();
			}
		},
		[ searchQuery ]
	);

	return (
		<div className="LinkedInSearchApp">
			<SearchForm setSearchQuery={setSearchQuery} />
			{loading ? <Loading /> : <img src={`data:image/png;base64, ${image}`} alt="" />}
		</div>
	);
}

export default LinkedInSearchApp;
