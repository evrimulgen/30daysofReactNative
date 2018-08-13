import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SimpleStopWatch from './components/SimpleStopWatch';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SimpleStopWatch />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
