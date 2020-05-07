import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { useStitchAuth } from './StitchAuth';
import { Button, Card, Container } from 'semantic-ui-react';

Login.propTypes = {};
export default function Login() {
	const { actions } = useStitchAuth();
	return (
		<ErrorBoundary>
			<Container className='login-layout'>
				<Card fluid className='login-card'>
					<Card.Content>
						<Button
							fluid
							className='loginbtn'
							provider='anonymous'
							onClick={() => actions.handleLogin('anonymous')}>
							Log In as Guest
						</Button>
						<Button
							fluid
							className='loginbtn'
							provider='google'
							onClick={() => actions.handleLogin('google')}>
							Log In with Google
						</Button>
					</Card.Content>
				</Card>
			</Container>
		</ErrorBoundary>
	);
}
