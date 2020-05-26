import React from 'react';
import TodoApp from './TodoApp';
import Login from './Login';
import { StitchAuthProvider, useStitchAuth } from './StitchAuth';
import { Header, Button } from 'semantic-ui-react';
import '../style.css';

App.propTypes = {};
export default function App() {
	return (
		<StitchAuthProvider>
			<AppUI />
		</StitchAuthProvider>
	);
}

AppUI.propTypes = {};
function AppUI() {
	const {
		isLoggedIn,
		actions: { handleLogout },
	} = useStitchAuth();
	return (
		<div className='layout'>
			<div className='navbar'>
				<Header as='h1' className='title'>
					Node To-Do
					{isLoggedIn && (
						<Button floated='right' inverted onClick={handleLogout}>
							Logout
						</Button>
					)}
				</Header>
			</div>
			{isLoggedIn ? <TodoApp /> : <Login />}
		</div>
	);
}
