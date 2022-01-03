import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { addTask } from '../../Redux/taskslist.reducers';
import { useDispatch } from 'react-redux';
import { setAddTaskVisible } from '../../Redux/modals.reducers';

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});


export default function AddTaskForm() {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');
	const [date, setDate] = useState('');
	return (
		<View>
			<TextInput label={`title`} onChangeText={setTitle} value={title} />
			<TextInput label={`note`} onChangeText={setNote} value={note} />
		</View>
	);

}