import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Taskslist from './components/TasksList/TasksList';
import AddTask from './components/Modals/AddTask';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

	container: {
		flex: 1,
		marginTop: 44,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		backgroundColor: '#fff',
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'lightblue',
		alignItems: 'center',
	},
	list: {
		flex: 10,
		backgroundColor: 'lightgreen',
	},
	addtask: {
		flex: 1,
		backgroundColor: 'lightpink',
	},
});

export default function DidIDoIt() {
	const tasks = useSelector(state => state.tasks);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Header</Text>
			</View>
			<View style={styles.list}>
				<Taskslist tasks={tasks} />
			</View>
			<View style={styles.addtask}>
				<AddTask />
			</View>
		</View>

	);

}
