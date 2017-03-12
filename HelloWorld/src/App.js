import React, {Component} from 'react';
import { View, Text, Navigator } from 'react-native'

import Page1 from './Pages/Page1'
class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: Page1}}
                configureScene={(route)=> {return Navigator.SceneConfigs.VerticalDownSwipeJump;}}
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component  navigator={navigator}/> 
                }} 
            />
        );
    }
}

export default App;