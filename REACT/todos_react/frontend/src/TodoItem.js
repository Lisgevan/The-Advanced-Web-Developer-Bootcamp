import React from "react";

const TodoItem = ({ name, completed, onDelete, onToggle }) => (
	<li className="task">
		<p
			style={{
				textDecoration: completed ? "line-through" : "none",
			}}
			onClick={onToggle}>
			{name}
			<span onClick={onDelete}> X </span>
		</p>
	</li>
);

export default TodoItem;

