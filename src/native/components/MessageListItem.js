/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout';

class jana extends Component {
  onActionSelected = (e) => {

  }

  render() {
    return (
      <View>
        <TabLayout>
          <Tab name="Chats"/>
          <Tab name="Groups"/>
          <Tab name="Contacts"/>
        </TabLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('jana', () => jana);
