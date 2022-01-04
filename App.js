import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import DidIDoIt from './newsrc/DidIDoIt';
import store from './newsrc/Redux/store';
import { Provider } from 'react-redux';
import {
	en,

	registerTranslation,
} from 'react-native-paper-dates';

registerTranslation('en', en);


const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#1e88e5',
		accent: 'yellow',
	},
};

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<DidIDoIt />
			</PaperProvider>
		</Provider>
	);
}


