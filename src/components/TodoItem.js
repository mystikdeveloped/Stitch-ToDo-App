import React from 'react';
import PropTypes from 'prop-types';
import { CheckedIcon, UncheckedIcon } from './Icon';
import { Card } from 'semantic-ui-react';

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
				<p className='todo-text'>{item.task}</p>
			</Card.Content>
		</Card>
	);
}
