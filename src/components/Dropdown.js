import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [ open, setOpen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener('click', (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		});
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={options.value}
				className="item"
				onClick={() => {
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div className="ui container" ref={ref}>
			<div className="ui form">
				<div className="field">
					<label className="label">Select a Color</label>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className={`ui selection dropdown ${open
							? 'visible active'
							: ''}`}
					>
						<i className="dropdown icon" />
						<div className="text">{selected.label}</div>
						<div
							className={`menu ${open
								? 'visible transition'
								: ''}`}
						>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
