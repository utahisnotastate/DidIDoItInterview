import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import parseISO from 'date-fns/parseISO';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
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
	taskcolumn: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	item: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		color: '#000',
		padding: 10,
	},
});

const Task = (item) => {
	const parsedDate = Date.parse(item.item.time);
	const formatedTime = format(parsedDate, 'h:mm aaa');
	console.log(formatedTime);
	return (
		<View key={item.item.id} style={styles.item}>
			<View style={styles.taskcolumn}>
				<View>
					<Text>{item.item.title}</Text>
				</View>
				<View>
					<Text>{item.item.note}</Text>
				</View>
			</View>
			<View style={styles.taskcolumn}>
				<Text>Completed</Text>
				<Text>{`${formatedTime}`}</Text>
			</View>

			<Button>Delete</Button>

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
