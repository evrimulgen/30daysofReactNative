import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SimpleStopWatch extends Component {
	state = {
		timer: null,
		count: '0.00'
	};

	onStart = () => {
		this.timer = setInterval(() => {
			const count = this.state.count;
			this.setState({ count: String((Number(count) + 0.1).toFixed(1)) });
		}, 100);
	};
	onPause = () => {
		clearInterval(this.timer);
		this.timer = null;
	};
	onReset = () => {
		this.setState({ count: '0.00' });
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.time}>
					<Text style={styles.count}>{this.state.count}</Text>
				</View>
				<View style={styles.control}>
					<TouchableOpacity
						onPressOut={this.onStart}
						style={styles.controlButton}
					>
						<Icon name="play-arrow" size={50} color="#ffffff" />
					</TouchableOpacity>
					<TouchableOpacity
						onPressOut={this.onPause}
						style={styles.controlButton}
					>
						<Icon name="pause" size={50} color="#ffffff" />
					</TouchableOpacity>
					<TouchableOpacity
						onPressOut={this.onReset}
						style={styles.controlButton}
					>
						<Icon name="replay" size={50} color="#ffffff" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000'
	},
	time: {
		flex: 1,
		paddingVertical: 100,
		alignItems: 'center'
	},
	count: {
		fontSize: 88,
		fontWeight: '200',
		color: '#ffffff'
	},
	control: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	controlButton: {
		paddingHorizontal: 20
	}
});

export default SimpleStopWatch;
