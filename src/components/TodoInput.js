import React from 'react';
import PropTypes from 'prop-types';

import { Input, Container, Button } from 'semantic-ui-react';

TodoInput.propTypes = {
	addTodo: PropTypes.func,
};
export default function TodoInput(props) {
	const { addTodo, ...inputProps } = props;
	return (
		<Container>
			<Input
				style={{ 'margin-left': '5%', width: '75%' }}
				{...inputProps}
				type='text'
				placeholder='What Do You Need To Do?'
			/>
			<ActionButton action={props.addTodo}>Add To-Do</ActionButton>
		</Container>
	);
}

const ActionButton = (props) => {
	return (
		<Button
			className='mainbtns'
			color='info'
			onClick={props.action}
			disabled={props.disabled}>
			{props.children}
		</Button>
	);
};
