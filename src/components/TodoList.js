import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ErrorBoundary from 'react-error-boundary';
import TodoItem from './TodoItem';
import { Container, List } from 'semantic-ui-react';

TodoList.propTypes = {
	items: PropTypes.array,
	actions: PropTypes.object,
};
export default function TodoList(props) {
	const { items, hasHadTodos, actions } = props;

	return (
		<ErrorBoundary>
			<List>
				{items.length === 0 && <NoTodoItems hasHadTodos={hasHadTodos} />}
				{items.map((item) => (
					<TodoItem
						key={item._id.toString()}
						item={item}
						toggleStatus={() => actions.toggleTodoStatus(item._id)}
					/>
				))}
			</List>
		</ErrorBoundary>
	);
}
const NoTodoItems = (props) => {
	const Layout = styled.div`
		text-align: center;
		font-size: 2em;
		padding-top: 60px;
		padding-bottom: 60px;
	`;

	return (
		<Container textAlign='center' fluid className='todo-container'>
			{props.hasHadTodos ? (
				<span>
					<span role='img' aria-label='celebrate'>
						{' '}
						🎉{' '}
					</span>
					All done! Enjoy your day!
				</span>
			) : (
				<span>
					Enter some text and click <strong>Add</strong> to save your first
					to-do task
				</span>
			)}
		</Container>
	);
};
