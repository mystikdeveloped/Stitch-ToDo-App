import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import TodoList from './TodoList';
import TodoControls from './TodoControls';
import { useStitchAuth } from './StitchAuth';
import { useTodoItems } from './useTodoItems';
import '../style.css';
import { Container, Card } from 'semantic-ui-react';

TodoApp.propTypes = {};
export default function TodoApp() {
	const { currentUser } = useStitchAuth();
	const todo = useTodoItems(currentUser.id);

	return (
		<ErrorBoundary>
			<Container className='layout' style={{ 'padding-top': '30px' }}>
				<Card fluid>
					<Card.Header
						as='h1'
						style={{ margin: 'auto', 'padding-top': '15px' }}>
						Your To-Do List
					</Card.Header>
					<TodoControls {...todo} />
				</Card>

				<TodoList {...todo} />
			</Container>
		</ErrorBoundary>
	);
}
