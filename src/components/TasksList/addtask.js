import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from '../../redux/addtaskdialog';

const AddTask = () => {

	const visible = useSelector(state => state.addtaskdialog);
	const dispatch = useDispatch();

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					dispatch(setVisible());
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => dispatch(setVisible())}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={() => dispatch(setVisible())}
			>
				<Text style={styles.textStyle}>Show Modal</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
	},
	modalView: {
		backgroundColor: 'white',
		borderRadius: 20,
		//alignItems: 'center',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		height: '100%',
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default AddTask;

/*
<Button mode='contained' icon='circle-edit-outline' onPress={() => dispatch(setVisible())}>
	Add Task
</Button>
<Portal>
	<Modal visible={visible} onDismiss={hideDialog}>
		<Paragraph>Add Task</Paragraph>
		<NewTask />
	</Modal>
</Portal>


<Dialog.Actions>
	<Button onPress={() => dispatch(setVisible())}>Cancel</Button>
	<Button onPress={hideDialog}>Add</Button>
</Dialog.Actions>
*/
