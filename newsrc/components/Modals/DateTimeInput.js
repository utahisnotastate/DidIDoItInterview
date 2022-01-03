import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


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
	},
	modalrow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default function DateTimeInput() {
	const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
	const [time, setTime] = React.useState(new Date());
	const hour = time.getHours();
	const minute = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hour >= 12 ? 'PM' : 'AM';


	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleConfirmTime = time => {
		console.warn('A time has been picked: ', time);
		hideTimePicker();
		setTime(time);
	};

	return (
		<View style={styles.container}>
			<View style={styles.timerow}>
				<Text> Time completed:</Text>
				<Text>{hour} :{minute} :{seconds} {ampm}</Text>
			</View>
			<View style={styles.modalrow}>
				<Button mode='contained' onPress={showTimePicker}>
					Choose Time
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
