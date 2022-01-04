import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Portal, Button, TextInput, FAB } from 'react-native-paper';
import { setAddTaskVisible } from '../../Redux/modals.reducers';
import { addTask } from '../../Redux/taskslist.reducers';
import DateTimeInput from './DateTimeInput';


const styles = StyleSheet.create({
		button: {
			display: 'flex',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		input: {
			height: 40,
			margin: 12,
			borderWidth: 1,
			padding: 10,
		},
		formrow: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		modalView: {
			display: 'flex',
			backgroundColor: 'white',
			borderRadius: 10,
			padding: 10,
			margin: 20,
		},
		fab: {
			position: 'absolute',
			margin: 16,
			right: 0,
			bottom: 0,
		},
	})
;
export default function AddTask() {
	const visible = useSelector((state) => state.modals.addTaskVisible);
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const [date, setDate] = useState(new Date());
	const dispatch = useDispatch();

	const hideModal = () => dispatch(setAddTaskVisible());

	const addTaskToList = () => {
		//generate random id
		const id = Math.floor(Math.random() * 1000000);
		const time = date;
		hideModal();
		console.log({ title, note, time: `${time}`, id: `${id}` });
		dispatch(addTask({ title, note, time: `${time}`, id: `${id}` }));
	};


	return (
		<View>
			<Portal>
				<Modal visible={visible} onDismiss={hideModal}>
					<View style={styles.modalView}>
						<Button
							onPress={() => {
								hideModal();
							}}>X</Button>
						<TextInput
							label='Title'
							mode={'outlined'}
							value={title}
							onChangeText={(text) => setTitle(text)} />
						<TextInput
							multiline
							mode={'outlined'}
							numberOfLines={5}
							label='Note'
							value={note}
							onChangeText={(text) => setNote(text)} />

						<DateTimeInput time={date} setTime={setDate} />
						<Button onPress={addTaskToList}>Add Completed Task To List</Button>
					</View>
				</Modal>
			</Portal>
			<Button
				onPress={() => {
					hideModal();
					//dispatch(addTask({ title, note, date }));
				}}>Create New Task</Button>
		</View>
	);

}

/*
<Button
				onPress={() => {
					hideModal();
					//dispatch(addTask({ title, note, date }));
				}}>Create New Task</Button>

<View style={styles.formrow}>
							<Text>{date.toLocaleDateString()}</Text>
							<Button
								onPress={showTimepicker}
								style={styles.button}
							>
								Time
							</Button>
						</View>
{show && (
							<DateTimePicker
								testID='dateTimePicker'
								value={date}
								mode={`time`}
								is24Hour={false}
								display='default'
								onChange={(e, date) => setDate(date)}
							/>
						)}


<Button onPress={showTimepicker} value={date}>Show time picker!</Button>
						{show && (
							<DateTimePicker
								testID='dateTimePicker'
								value={date}
								mode={`time`}
								is24Hour={false}
								display='default'
								onChange={onDateChange}
							/>
						)}
 */