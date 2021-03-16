import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ setSearchQuery }) {
	const [ value, setValue ] = useState('');
	const [ warning, setWarning ] = useState(false);

	const checkValue = (e) => {
		e.preventDefault();
		if (value.match(/^https:\/\/\www\.linkedin\.com\/.*$/)) {
			setSearchQuery(value);
			setWarning(false);
		} else {
			setSearchQuery('');
			setWarning(true);
		}
	};

	return (
		<div className="SearchForm">
			<form onSubmit={checkValue}>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="https://www.linkedin.com/in/example-user"
					className="SearchForm-input"
				/>
				<button>Submit</button>
			</form>
			{warning && (
				<p className="SearchForm-warning">
					Not a valid LinkedIn URL. Example: https://www.linkedin.com/in/example-user
				</p>
			)}
		</div>
	);
}

export default SearchForm;
