import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { setAddTaskVisible } from '../../Redux/modals.reducers';

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
		modalView: {
			display: 'flex',
			justifyContent: 'space-around',
			backgroundColor: 'white',
			padding: 20,
			borderRadius: 10,
		},
	})
;
export default function AddTask() {
	const visible = useSelector(state => state.modals.addTaskVisible);
	const dispatch = useDispatch();
	const containerStyle = { backgroundColor: 'white', padding: 20 };


	const hideModal = () => dispatch(setAddTaskVisible());

	return (

		<View>
			<Portal>
				<Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
					<View style={styles.modalView}>
						<Button onPress={hideModal}>Close</Button>
						<Text>Hello World!</Text>
					</View>
				</Modal>
			</Portal>
			<Button style={styles.button} mode={`contained`} onPress={() => dispatch(setAddTaskVisible())}>Add Task</Button>
		</View>
	);
}