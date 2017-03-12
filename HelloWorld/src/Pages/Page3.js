import React, {Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page1 from './Page1'
class Page3 extends Component {
    //go back to previous page
    previousPage = () => {
        Alert.alert('clicked');
        //switch to page2
        const { navigator } = this.props;
        navigator.pop();
    };
    //go back to home page
    homePage = () => {
        const { navigator } = this.props;
        navigator.popToTop(); //this method will unmount every other scene
    };
    render() {
        return (
            <View>
                <Text>
                   Hello this is the last Page
                </Text>
                <Button title="Previous Page" onPress = { this.previousPage } />
                <Button title="Home Page" onPress = { this.homePage } />
            </View>
        );
    }
}

export default Page3;