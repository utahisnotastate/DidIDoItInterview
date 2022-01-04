import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline, Text, Appbar, Surface, Card } from 'react-native-paper';
import Taskslist from './components/TasksList/TasksList';
import AddTask from './components/Modals/AddTask';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

	container: {
		flex: 1,
		marginTop: 44,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: 'lightgrey',
	},
	appbar: {
		justifyContent: 'center',

	},
	header: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'lightblue',
		alignItems: 'center',
	},
	list: {
		flex: 10,
	},
	addtask: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
});

export default function DidIDoIt() {
	const tasks = useSelector(state => state.tasks);
	return (
		<View style={styles.container}>
			<Appbar style={styles.appbar}>
				<Headline style={{ color: 'white' }}>??? Did I Do It ?????</Headline>
			</Appbar>

			<View style={styles.list}>
				<Taskslist tasks={tasks} />
			</View>
			<View style={styles.addtask}>
				<AddTask />
			</View>

		</View>

	);

}
