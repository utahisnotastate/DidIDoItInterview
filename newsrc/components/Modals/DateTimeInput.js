import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	timerow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	modalrow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default function DateTimeInput({ time = Date.now(), setTime }) {
	const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
	const formattedTime = format(time, 'h:mm aaa');


	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleConfirmTime = time => {
		//console.warn('A time has been picked: ', time);
		hideTimePicker();
		setTime(time);
	};

	return (
		<View style={styles.container}>
			<View style={styles.timerow}>
				<Text>Time Completed: {formattedTime}</Text>
			</View>
			<View style={styles.modalrow}>
				<Button mode='contained' onPress={showTimePicker}>
					Edit Time
				</Button>
				<DateTimePickerModal
					isVisible={isTimePickerVisible}
					mode='time'
					onConfirm={handleConfirmTime}
					onCancel={hideTimePicker}
				/>
			</View>
		</View>
	);
}
