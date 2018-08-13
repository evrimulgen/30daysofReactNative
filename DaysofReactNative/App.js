import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import SimpleStopWatch from './components/SimpleStopWatch';
import CustomFonts from './components/CustomFonts';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<CustomFonts />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
