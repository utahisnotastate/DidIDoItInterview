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
		backgroundColor: '#fff',
		color: '#000',
		padding: 10,
	},
});

const Task = (item) => {
	return (
		<View key={item.item.id} style={styles.item}>
			<Text>{item.item.title}</Text>
			<Text>{item.item.note}</Text>
			<Text>{item.item.time}</Text>
			<Text>Edit</Text>
		
		</View>
	);
};

const NoCompletedTasks = () => {
	return (
		<View style={styles.item}>
			<Text>No completed tasks. Add one below.</Text>
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
				ListEmptyComponent={<NoCompletedTasks />}
				renderItem={(item) => <Task {...item} />}
			/>
		</View>
	);
};

/*
<FlatList
				style={styles.list}
				data={tasks}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Task id={item.id} title={item.title} note={item.note}
																				time={item.time} />}

			/>
 */
export default TasksList;
