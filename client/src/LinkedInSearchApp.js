import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';

import axios from 'axios';

function LinkedInSearchApp() {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ image, setImage ] = useState('');

	useEffect(
		() => {
			(async function getData() {
				const { data } = await axios.get('http://localhost:8000/search', {});
				// setImage(data)
				console.log(data);
				// const img = data.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
				// console.log(img);
				// var decodedData = atob(data);
				setImage(data);
			})();
		},
		[ searchQuery ]
	);

	return (
		<div>
			<SearchForm setSearchQuery={setSearchQuery} />
			<h1>You searched for {searchQuery}</h1>
			{/* <h2>{image}</h2> */}
			<img src={`data:image/png;base64, ${image}`} alt="This is not working" />
			{/* <img
				src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg=="
				alt="Red dot"
			/> */}
		</div>
	);
}

export default LinkedInSearchApp;
