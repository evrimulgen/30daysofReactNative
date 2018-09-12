import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
	render() {
		const { text, onPress } = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{text.toUpperCase()}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#ffffff',
		paddingHorizontal: 50,
		paddingVertical: 10
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'bold'
	}
});

export default Button;
