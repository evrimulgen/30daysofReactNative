import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigation';
import store from './src/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}
