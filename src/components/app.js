import React from 'react';

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

const App = () => {
	return <Accordion />;
};

export default App;
