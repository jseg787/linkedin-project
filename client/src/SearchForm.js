import React, { useState } from 'react';

function SearchForm({ setSearchQuery }) {
	const [ value, setValue ] = useState('');

	const checkValue = (e) => {
		e.preventDefault();
		if (value.match(/^https:\/\/\www\.linkedin\.com\/.*$/)) {
			setSearchQuery(value);
		} else {
			setSearchQuery('');
		}
	};

	return (
		<div>
			<form onSubmit={checkValue}>
				<input value={value} onChange={(e) => setValue(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default SearchForm;
