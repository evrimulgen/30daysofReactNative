# 30 Days of React Native ⚛️ + 📱

_A self taught way of learning React Native._

## Philosophy 🤔

It’s a project in which you create at least 30 working modules/apps using React Native.

The target it to get hands on experience with React Native ASAP. React Native has a good and healthy ecosystem.

## Motivation/Inspiration 🤯 👏

The idea for this repo is inspired by awesome developers out there who took initiative of doing something similar

- [100 Days of Swift](https://samvlu.com/)
- [30 Days of Swift](https://github.com/allenwong/30DaysofSwift)
- [30 Days of React Native](https://github.com/allenwong/30DaysofSwift)

---

## How to use this Repo ⁉️

This file is a listing to other Standalone apps that have been published as separate repositories.

## Weather Cards

![Demo](https://cdn-images-1.medium.com/max/800/1*h7Zm66n-FRz63uJ0PPqppw.gif)

- linting with ESlint, used custom [eslint config](https://www.npmjs.com/search?q=eslint-config-amanhimself)
- build an interface with Card View and Input
- use `Activity Indicator` to indicate loading
- use `StatusBar`
- Fetching Data from an API
- use `KeyboardAvoidingView` to add padding to view on keyboard toggle
- build custom Card View
- use `ImageBackground` to display background image
- use `TextInput` for user input and local state management to fetch data based on search

[Code](https://github.com/amandeepmittal/weather-cards) | [Article](https://medium.com/@amanhimself/week-2-with-react-native-building-a-weather-app-ca50fcfcb1e1) | Tools: CRNA

## Geolocation and Permissions API

![Demo](https://i.imgur.com/WcxZy8W.png) ![Demo](https://i.imgur.com/m1uUakp.png)

This is divided in two parts:

- using Expo
- using react-native-cli
- use `navigator` available in JS natively
- use `getCurrentPosition` to fetch the current coordinates
- use `Permissions` API from Expo
- Request permission to use Location Services in Android when using `react-native-cli`

**Code**

- [Expo](https://github.com/amandeepmittal/find-me)
- [react-native-cli](https://github.com/amandeepmittal/findCoordsApp)

Tools: Expo-cli & react-native-cli

## Lottie Example

![Demo](https://cdn-images-1.medium.com/max/800/0*ojXTyWvdJ70ut1Yl.gif)

- use `Lottie`- an animataion lib that renders Adobe Effect files as static images
- fetch animation as a json file
- create functions for loading animation file and playing it

[Code](https://github.com/amandeepmittal/rn-lottie-example) | [Tutorial](https://hackernoon.com/react-native-getting-started-with-lottie-and-expo-8b2105fbb496) | Tools: Expo

## Pomodoro Timer

![Demo](https://cdn-images-1.medium.com/max/800/1*kMPizExeDMG-6MrYNbw8ew.gif)

- build a timer interface with play and pause button that displays time in seconds and minutes
- use `Redux` to manage state and create store
- use `re-ducks` philosophy to manage Redux files (see `/Timer`)
- build resuable stateless `Button` component
- use `PropTypes`
- use Vector icons from `FontAwesome`

[Code](https://github.com/amandeepmittal/rn-pomodoro-example) | [Tutorial - Coming Soon]() | Tools: Expo-CLI

## React Navigation Example

![Demo](https://cdn-images-1.medium.com/max/800/1*mwaLBOP-jYybqXn4dN10Sg.png) ![Demo](https://cdn-images-1.medium.com/max/800/1*tATWRPRM39a6UkruTayrTw.png)

- use `react-navigation v2.0+`
- use `StackNavigator`
- use `TabNavigator`

[Code](https://github.com/amandeepmittal/rnNavApp) | [Tutorial - Coming Soon]() | Tools: react-native-cli
