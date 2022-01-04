import React from 'react';
import { useDispatch } from 'react-redux';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Divider, Subheading, Caption, Text, Title } from 'react-native-paper';
import { format } from 'date-fns';
import { deleteTask } from '../../Redux/taskslist.reducers';//import Task from './task';

const styles = StyleSheet.create({
	container: {
		flex: 1,


	},
	list: {},
	taskcolumn: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 5,
	},
	item: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
		color: '#000',

	},
});

const Task = (item) => {
	const dispatch = useDispatch();
	const parsedDate = Date.parse(item.item.time);
	const formatedTime = format(parsedDate, 'h:mm aaa');
	return (
		<View key={item.item.id} style={styles.item}>
			<View style={styles.taskcolumn}>
				<View>
					<Text>{item.item.title}</Text>
				</View>
				<View>
					<Caption>{item.item.note}</Caption>
				</View>
			</View>
			<View style={styles.taskcolumn}>
				<Text>Completed</Text>
				<Text>{`${formatedTime}`}</Text>
			</View>

			<Button onPress={() => dispatch(deleteTask(item.item.id))}>Delete</Button>

		</View>
	);
};

const NoCompletedTasks = () => {
	return (
		<View style={styles.item}>
			<Title>No completed tasks. Add one below.</Title>
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
				ItemSeparatorComponent={() => <Divider />}
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
