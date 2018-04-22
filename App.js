import React, {Component} from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HackerNewsApp, {DetailsPage} from './src/src';

const AppNav = StackNavigator({
  Home: {
    screen: HackerNewsApp,
  },
  
  Details: {
    screen: DetailsPage
  }},

  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return (
        <AppNav/>
      );
  }
}

AppRegistry.registerComponent('HackerNewsApp', () => HackerNewsApp);