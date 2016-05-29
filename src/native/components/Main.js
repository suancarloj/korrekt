import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  ListView,
  ToolbarAndroid,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout';





export default class MainView extends React.Component {
  constructor (props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        { lastUpdatedOn: new Date(0), lastMessage: 'Hello world', threadName: 'Jana'},
        { lastUpdatedOn: new Date(100), lastMessage: 'Hello world', threadName: 'Vincent'},
      ]),
      pagePosition: 0,
    }
  }

  onActionSelected = (position) => {
    if (position === 0) { // index of 'Settings'
      console.log('position')
    }
  }

  render = () => {
    return (
      <View>
        <ToolbarAndroid
          title="AwesomeApp"
          actions={[{title: 'Settings', show: 'always'}]}
          style={styles.navBar}
          onActionSelected={this.onActionSelected} />
        <TabLayout
          style={styles.tabLayout}
          selectedTab={this.state.pagePosition}
          onTabSelected={this._setPagePosition.bind(this)}>
          <Tab name="Chats"/>
          <Tab name="Contacts"/>
        </TabLayout>
        <ViewPagerAndroid
          style={styles.viewPager}
          ref={viewPager => { this.viewPager = viewPager; }}
          onPageSelected={this._setPagePosition}>
          <View style={styles.content}>
            <Text
              onPress={() => this.props.navigator.push({ name: 'Conversation', index: 1 })}>
              Tab 1 content
            </Text>
          </View>
          <View style={styles.content}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => (
                <View>
                  <Text>{rowData.threadName}</Text>
                  <Text>{rowData.lastMessage}</Text>
                </View>
              )}
            />
          </View>
        </ViewPagerAndroid>
      </View>
    )
  }

  _setPagePosition = (e) => {
    const pagePosition = e.nativeEvent.position;
    this.setState({ pagePosition });
    // too bad ViewPagerAndroid doesn't support prop updates,
    // work around by forwarding changes using exposed API
    this.viewPager.setPage(pagePosition);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab1: {
    width: 110,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab2: {
    width: 110,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab3: {
    width: 110,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabLayout: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  viewPager: {
    height: 200,
  },
  content: {
    padding: 10,
  },
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
