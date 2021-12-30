import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
//import Task from './task';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 5,
		paddingRight: 5,

	},
	list: {
		padding: 4,
	},
	item: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
});

const Task = ({ title, note, time }) => {
	return (
		<View style={styles.item}>
			<Text>{title}</Text>
			<Text>{note}</Text>
			<Text>{time}</Text>
			<Text>Edit</Text>
		</View>
	);
};

const TasksList = ({ tasks }) => {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={tasks}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Task id={item.id} title={item.title} note={item.note}
																				time={item.time} />}

			/>
		</View>
	);
};

export default TasksList;
