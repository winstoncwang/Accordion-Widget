import React from 'react';

const Accordion = (props) => {
	

	const renderedList = props.items.map((item) => {
		return (
			<React.Fragment key={item.title}>
				<div className="title active">
					<i className="dropdown icon" />
					{item.title}
				</div>
				<div className="content active">
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
