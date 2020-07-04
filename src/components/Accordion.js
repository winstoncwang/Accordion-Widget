import React, { useState } from 'react';

const Accordion = (props) => {
	const [ inputValue, setInputValue ] = useState(null);

	const onClick = (index) => {
		setInputValue(index);
	};

	const renderedList = props.items.map((item, index) => {
		const active = inputValue === index ? 'active' : '';

		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${active}`}
					onClick={() => {
						onClick(index);
					}}
				>
					<i className="dropdown icon" />
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui inverted container segment">
			<div className="ui inverted accordion">{renderedList}</div>
		</div>
	);
};

export default Accordion;
