import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	ListView,
	Image,
	StyleSheet,
	ImageBackground
} from 'react-native';
import { BlurView } from 'react-native-blur';

const { width } = Dimensions.get('window');

const imageList = [
	{ image: require('../../assets/images/hello.jpg'), text: '👋' },
	{ image: require('../../assets/images/bodyline.png'), text: '💪' },
	{ image: require('../../assets/images/dudu.jpg'), text: '🐳🐳🐳🐳🐳' },
	{ image: require('../../assets/images/darkvarder.png'), text: '😱' },
	{ image: require('../../assets/images/wave.jpg'), text: '🌮' }
];

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class CarouselEffect extends Component {
	state = {
		dataSource: ds.cloneWithRows(imageList)
	};

	renderRow = (rowData, sectionID, rowID) => {
		const isLast = Number(rowID) === imageList.length - 1;
		return (
			<View
				key={rowID}
				style={[styles.imageItem, isLast ? styles.lastImage : {}]}
			>
				<Image source={rowData.image} style={styles.image} resizeMode="cover" />
				<BlurView style={styles.textContainer} blurType="xlight">
					<Text style={styles.text}>{rowData.text}</Text>
				</BlurView>
			</View>
		);
	};

	render() {
		return (
			<ImageBackground
				source={require('../../assets/images/blue.png')}
				resizeMode="stretch"
				style={{ width: '100%', height: '100%' }}
			>
				<BlurView style={styles.container} blurType="light">
					<View style={styles.listContainer}>
						<View style={styles.listContent}>
							<ListView
								dataSource={this.state.dataSource}
								renderRow={this.renderRow}
								horizontal={true}
								showsVerticalScrollIndicator={true}
							/>
						</View>
					</View>
				</BlurView>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	listContent: {
		width,
		height: 450
	},
	imageItem: {
		position: 'relative',
		marginLeft: 20,
		width: 300,
		height: 400,
		borderRadius: 7,
		overflow: 'hidden'
	},
	lastImage: {
		marginRight: 20
	},
	image: {
		width: 300,
		height: 400
	},
	textContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: 300,
		height: 60,
		overflow: 'hidden',
		paddingLeft: 15
	},
	text: {
		fontSize: 16,
		color: '#333333',
		lineHeight: 40
	}
});

export default CarouselEffect;
