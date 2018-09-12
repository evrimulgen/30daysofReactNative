import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Screens from '../components/Screens';

class Onboarding extends Component {
	componentDidMount = () => {
		StatusBar.setHidden(true);
	};

	render() {
		return <Screens />;
	}
}

export default Onboarding;
