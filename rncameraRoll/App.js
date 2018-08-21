import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import ImageBrowser from './components/ImageBrowser';

const Navigation = createStackNavigator({
	Home: {
		screen: Home
	},
	ImageBrowser: {
		screen: ImageBrowser
	}
});

export default class App extends Component {
	render() {
		return <Navigation />;
	}
}
