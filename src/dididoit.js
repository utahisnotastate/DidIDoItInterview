import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Taskslist from './components/TasksList/taskslist';
import AddTask from './components/TasksList/addtask';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: 'lightgray',
		justifyContent: 'flex-start',
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});


export default function DidIDoIt() {
	const tasks = useSelector(state => state.tasklist);
	return (
		<View style={styles.container}>
			<View style={{ flex: 1, backgroundColor: 'red', height: 44 }}>
				<Text>Did I do it?</Text>
			</View>
			<View style={{ flex: 10 }}>
				<Taskslist tasks={tasks} />
			</View>

			<View style={{ flex: 1, backgroundColor: 'blue' }}>
				<AddTask />
			</View>


		</View>
	);
}