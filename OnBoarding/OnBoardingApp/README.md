# OnBoarding App in React Native

This is a react-native application that allows to have a welcome/onboarding screens using a custom made slider.

## Getting Started

This app is dependent on following dependencies:

```json
 "dependencies": {
    "react": "16.4.1",
    "react-native": "0.56.0",https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png
    "react-native-vector-icons": "5.0.0"
  }
```

To install these dependencies, you have to follow these steps:

```shell
yarn install
```

Then run the following command to link native modules (for iOS and Android) to use vector icons:

```shell
react-native link
```

_Note_: This app is build with `react-native-cli`. You will need to install it by running `npm install --global react-native-cli`.

## Project Structure

This app contains only one Screen component called `Onboarding` that uses three different components.

- Slider
- Screens
- Button

![project-structure](https://i.imgur.com/7zAxzoT.png)

In `Screens` you can add different number of screens depending on your requirement. Here is an example:

```js
<View style={[styles.slideContainer, { backgroundColor: '#00a8b5' }]}>
	<Icon name="ios-build" {...iconStyles} />
	<Text style={styles.header}>Screen 1</Text>
	<Text style={styles.subtitle}>This is the subtitle for first screen.</Text>
</View>
```

The background color to every screen is customizable. We are using hexcodes for that. Similarly, the title and the subtitle to the screen are editable as well as the `Icon`.

To what icons you can use, refer to this [library](https://oblador.github.io/react-native-vector-icons/).

## Screens

Following are the screens that are added by default in the application.

![](https://i.imgur.com/dXC87Jh.png)
![](https://i.imgur.com/JxJBFxf.png)
![](https://i.imgur.com/z3ny1Rc.png)

## Running this project

To run this project you could start with:

```shell
yarn start
```

It will trigger the `start` script defined in `package.json`. This command only triggers the metro bundler dependency. You will have to run and build this project for each specific platform.

To run on specific platform **recommended way**:

```shell
# iOS
react-native run-ios

# Android
react-native run-android
```

## About StatusBar

This app hides the Status Bar of a device but you can customize it to your needs in file `src/screens/Onboarding.js`.

```js
componentDidMount = () => {
	StatusBar.setHidden(true);
};
```

## Extending this app

You can use OnBoarding App with your own navigation libraries such as `react-navigation`, `wix/react-native-navigation`, etc. The philosophy behind not using a navigation component on your own is that in real React Native application you will be following a strategy that is provided by these navigation libraries. All you have to do is integrate `Onboarding` Component (like we have done in `App.js`) along with your own navigation strategy.

In slider

## Compatible Mobile Platforms

This project is only compatible with following mobile platforms:

- iOS
- Android
