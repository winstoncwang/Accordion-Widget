import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{
		label : 'Afrikaans',
		value : 'af'
	},
	{
		label : 'Arabic',
		value : 'ar'
	},
	{
		label : 'Hindi',
		value : 'hi'
	}
];

const Translate = () => {
	const [ language, setLanguage ] = useState(options[0]);
	const [ input, setInput ] = useState('');

	return (
		<div className="ui form container">
			<div className="field">
				<label>Enter Text</label>
				<input
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<Dropdown
					label="Select a Language"
					selected={language}
					onSelectedChange={setLanguage}
					options={options}
				/>
			</div>
		</div>
	);
};

export default Translate;
