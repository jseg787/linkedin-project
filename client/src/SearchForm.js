import React, { useState } from 'react';

function SearchForm({ setSearchQuery }) {
	const [ value, setValue ] = useState('');

	const checkValue = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSearchQuery(value);
				}}
			>
				<input value={value} onChange={checkValue} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default SearchForm;
