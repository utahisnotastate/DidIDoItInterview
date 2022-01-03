import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import { setAddTaskVisible } from '../../Redux/modals.reducers';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
		button: {
			display: 'flex',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		modal: {
			flex: 1,
			justifyContent: 'space-around',
			padding: 20,


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
			justifyContent: 'space-around',
			backgroundColor: 'white',
			padding: 20,
			borderRadius: 10,
			height: 300,
		},
	})
;
export default function AddTask() {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('time');
	const [show, setShow] = useState(false);
	const visible = useSelector(state => state.modals.addTaskVisible);
	const dispatch = useDispatch();
	const containerStyle = { backgroundColor: 'white', padding: 20 };


	const hideModal = () => dispatch(setAddTaskVisible());

	const onDateChange = (event, selectedDate) => {
		console.log(selectedDate);
		//(Platform.OS === 'ios');
		//setDate(selectedDate);
	};
	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		<View>
			<Portal>
				<Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
					<View style={styles.modalView}>
						<Button
							onPress={() => {
								hideModal();
								console.log(title, note, date);
							}}>X</Button>
						<View>
							<TextInput
								label='Title'
								mode={'outlined'}
								value={title}
								onChangeText={(text) => setTitle(text)} />
						</View>
						<View>
							<TextInput
								multiline
								mode={'outlined'}
								numberOfLines={5}
								label='Note'
								value={note}
								onChangeText={(text) => setNote(text)} />
						</View>
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
					</View>
				</Modal>
			</Portal>
			<Button
				onPress={() => {
					hideModal();
					console.log(title, note, date);
				}}>Add Task</Button>
		</View>
	);

}

/*
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