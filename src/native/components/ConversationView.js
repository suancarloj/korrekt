import React, {
  Text,
  View,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native'

export default function ConversationView (props) {
  return (
    <View>
      <ToolbarAndroid
        title="AwesomeApp"
        actions={[{title: 'Settings', show: 'always'}]}
        style={styles.navBar}
      />
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ddd',
    height: 56,
  },
  navBarText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 16,
  },
});