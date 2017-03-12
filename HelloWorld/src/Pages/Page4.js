import React, {Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page1 from './Page1'
class Page3 extends Component {
    //go back to previous page
    previousPage = () => {
        Alert.alert('clicked');
        //switch to page3
        const { navigator } = this.props;
        navigator.pop();
    };
    //go back to home page
    goToSpecificPage = () => {
        const { navigator } = this.props;
        var arr_Routes=navigator.getCurrentRoutes(); 
        navigator.popToRoute(arr_Routes[1]);         
    };
    render() {
        return (
            <View>
                <Text>
                   Hello this is the last Page
                </Text>
                <Button title="Previous Page" onPress = { this.previousPage } />
                <Button title="Go To Page 2" onPress = { this.goToSpecificPage } />
            </View>
        );
    }
}

export default Page3;