/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View,
  BackAndroid,
} from 'react-native';
import Main from './src/native/components/Main.js';
import ConversationView from './src/native/components/ConversationView.js';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});

class jana extends Component {

  renderScene = (route, navigator) =>{

    const Component = route.index === 0 ? Main : ConversationView
    return (
      <Component navigator={navigator}/>
    )
  }

  render = () => {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        ref={(nav) => { _navigator = nav; }}
        renderScene={this.renderScene}
      />
    );
  }
}
AppRegistry.registerComponent('jana', () => jana);
