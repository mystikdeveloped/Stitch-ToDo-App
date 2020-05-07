import React from 'react';
import styled from '@emotion/styled';
import { app, logoutUser } from './../stitch';
import { Button } from 'reactstrap';

const LogoutButton = () => <Button onClick={() => onLogout()}>Log Out</Button>;

function Navbar() {
	return <LogoutButton />;
}

export default Navbar;

function onLogout() {
	logoutUser(app.auth.user).then(() => {
		window.location.reload();
	});
}
