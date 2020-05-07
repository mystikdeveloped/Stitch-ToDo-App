import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Input, Container, Button } from 'semantic-ui-react';

TodoInput.propTypes = {
	addTodo: PropTypes.func,
};
export default function TodoInput(props) {
	const { addTodo, ...inputProps } = props;
	return (
		<Container>
			<Input
				style={{ width: '75%', 'margin-bottom': '20px' }}
				{...inputProps}
				type='text'
				placeholder='What Do You Need To Do?'
			/>
			<ActionButton action={props.addTodo}>Add To-Do</ActionButton>
		</Container>
	);
}

const ActionButton = (props) => {
	const Text = styled.div`
		margin-right: 8px;
		margin-left: 8px;
	`;
	return (
		<Button
			className='mainbtns'
			color='info'
			onClick={props.action}
			disabled={props.disabled}>
			<Text>{props.children}</Text>
		</Button>
	);
};
