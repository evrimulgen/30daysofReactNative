import React, { Component } from 'react';
import {
	TouchableHighlight,
	Modal,
	Button,
	CameraRoll,
	Dimensions,
	ScrollView,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';

const { width } = Dimensions.get('window');

export default class Home extends Component {
	static navigationOptions = {
		title: 'Camera Roll App'
	};

	state = {
		modalVisible: false,
		photos: [],
		index: null
	};

	setIndex = index => {
		if (index === this.state.index) {
			index = null;
		}
		this.setState({ index });
	};

	getPhotos = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'All'
		}).then(response => this.setState({ photos: response.edges }));
	};

	toggleModal = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	};

	navigate = () => {
		const { navigate } = this.props.navigation;
		navigate('ImageBrowser');
	};

	share = () => {
		const image = this.state.photos[this.state.index].node.image.uri;
		RNFetchBlob.fs.readFile(image, 'base64').then(data => {
			const shareOptions = {
				title: 'RN Share Demo',
				message: 'Check out this image',
				url: `data:image/jpg:base64,${data}`,
				subject: 'Check out this image'
			};

			Share.open(shareOptions)
				.then(res => console.log('success', res))
				.catch(err => console.log('error', err));
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					title="View Camera Roll"
					onPress={() => {
						this.toggleModal();
						this.getPhotos();
					}}
				/>
				<Button title="Browse Images" onPress={this.navigate} />

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => console.log('modal closed')}
				>
					<View style={styles.modal}>
						<Button title="Close" onPress={this.toggleModal} />
						<ScrollView contentContainerStyle={styles.scrollview}>
							{this.state.photos.map((photo, index) => {
								return (
									<TouchableHighlight
										style={{ opacity: index === this.state.index ? 0.5 : 1 }}
										onPress={() => this.setIndex(index)}
										key={index}
										underlayColor="transparent"
									>
										<Image
											source={{ uri: photo.node.image.uri }}
											style={{ width: width / 3, height: width / 3 }}
										/>
									</TouchableHighlight>
								);
							})}
						</ScrollView>
						{this.state.index !== null && (
							<View style={styles.shareButton}>
								<Button title="Share" onPress={this.share} />
							</View>
						)}
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	modal: {
		paddingTop: 20,
		flex: 1
	},
	scrollview: {
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	shareButton: {
		position: 'absolute',
		width,
		padding: 10,
		bottom: 0,
		left: 0
	}
});
