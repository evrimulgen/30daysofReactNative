import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Slider from './Slider';

const iconStyles = {
	size: 100,
	color: '#ffffff'
};

class Screens extends Component {
	render() {
		return (
			<Slider>
				<View style={[styles.slideContainer, { backgroundColor: '#00a8b5' }]}>
					<Icon name="ios-build" {...iconStyles} />
					<Text style={styles.header}>Screen 1</Text>
					<Text style={styles.subtitle}>
						This is the subtitle for first screen.
					</Text>
				</View>
				<View style={[styles.slideContainer, { backgroundColor: '#774898' }]}>
					<Icon name="ios-code-working" {...iconStyles} />
					<Text style={styles.header}>Screen 2</Text>
					<Text style={styles.subtitle}>
						This is the subtitle for second screen.
					</Text>
				</View>
				<View style={[styles.slideContainer, { backgroundColor: '#e62a76' }]}>
					<Icon name="ios-done-all" {...iconStyles} />
					<Text style={styles.header}>Screen 3</Text>
					<Text style={styles.subtitle}>
						This is the subtitle for third screen.
					</Text>
				</View>
			</Slider>
		);
	}
}

const styles = StyleSheet.create({
	slideContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: 'bold',
		marginVertical: 15
	},
	subtitle: {
		color: '#ffffff',
		fontSize: 18,

		marginHorizontal: 40
	}
});

export default Screens;
