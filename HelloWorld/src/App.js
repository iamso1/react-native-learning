import React, {Component} from 'react';
import { View, Text, Navigator } from 'react-native'

import Page1 from './Pages/Page1'
class App extends Component {
  _configureScene = ( route, routeStack ) => {
    //return Navigator.SceneConfigs.VerticalDownSwipeJump;
    // return Navigator.SceneConfigs.FloatFromBottom
    return Navigator.SceneConfigs.PushFromRight
  };
    render() {
        return (
            <Navigator
                initialRoute={{component: Page1}}
                configureScene={ this._configureScene }
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component  navigator={navigator} {...route.passProps}/> 
                }} 
            />
        );
    }
}

export default App;