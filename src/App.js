import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
	{
		title   : 'What is React?',
		content : 'React is a front end javascript framework'
	},
	{
		title   : 'Why use React?',
		content :
			'React allows rapid development of the front end part of the project'
	},
	{
		title   : 'How do you use React?',
		content :
			'Create React project by using components, either class/function components using state'
	}
];

const options = [
	{
		label : 'The Color Red',
		value : 'red'
	},
	{
		label : 'The Color Green',
		value : 'green'
	},
	{
		label : 'A Shade of Blue',
		value : 'blue'
	}
];

const App = () => {
	const [ selected, setSelectedChange ] = useState(options[0]);

	return (
		<React.Fragment>
			<br />
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{/* <Dropdown
				selected={selected}
				onSelectedChange={setSelectedChange}
				options={options}
			/> */}
			<Translate />
		</React.Fragment>
	);
};

export default App;
