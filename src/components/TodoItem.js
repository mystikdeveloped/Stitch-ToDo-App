import React from 'react';
import PropTypes from 'prop-types';
import { CheckedIcon, UncheckedIcon } from './Icon';
import { Card, Header } from 'semantic-ui-react';

TodoItem.propTypes = {
	item: PropTypes.object,
	remove: PropTypes.func,
	setStatus: PropTypes.func,
	toggleStatus: PropTypes.func,
};
export default function TodoItem(props) {
	const { item, toggleStatus } = props;
	const Checkbox = item.checked ? CheckedIcon : UncheckedIcon;
	return (
		<Card fluid className='todo-layout' onClick={toggleStatus}>
			<Card.Content className='todo-data'>
				<Checkbox />
				<Header as='h2'>{item.task}</Header>
			</Card.Content>
		</Card>
	);
}
