import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CustomFont extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Custom Font</Text>
					<Text style={styles.body}>
						This is an example of using custom font in a React Native App.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	textContainer: {
		paddingVertical: 50,
		alignItems: 'center'
	},
	title: {
		fontSize: 56,
		fontFamily: 'HanaleiFill-Regular'
	},
	body: {
		paddingVertical: 50,
		fontSize: 20,
		fontFamily: 'KirangHaerang-Regular'
	}
});

export default CustomFont;
