import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';
import { Container, Button } from 'semantic-ui-react';

TodoControls.propTypes = {
	items: PropTypes.array,
	actions: PropTypes.object,
};
export default function TodoControls(props) {
	const { items, actions } = props;
	const [inputText, setInputText] = useState('');
	const hasCheckedItems = items && items.filter((x) => x.checked).length > 0;
	const handleInput = (e) => setInputText(e.target.value);
	const handleAddTodo = () => {
		if (inputText) {
			actions.addTodo(inputText);
			setInputText('');
		}
	};
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleAddTodo();
		}
	};
	const allTodosAreCompleted = items.every((item) => item.checked === true);

	return (
		<Container fluid className='controls'>
			<TodoInput
				value={inputText}
				addTodo={handleAddTodo}
				onChange={handleInput}
				onKeyDown={handleKeyPress}
			/>
			<Container fluid>
				{items.length > 0 && !allTodosAreCompleted && (
					<Button
						className='selectbtn'
						floated='left'
						onClick={actions.completeAllTodos}>
						{props.selected ? (
							<span>All Completed</span>
						) : (
							<span>Complete All</span>
						)}
					</Button>
				)}
				{hasCheckedItems && (
					<Button
						className='clearbtn'
						floated='right'
						onClick={actions.clearCompletedTodos}>
						Clear Completed
					</Button>
				)}
			</Container>
		</Container>
	);
}
