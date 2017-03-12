import React, {Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page1 from './Page1'
class Page3 extends Component {
    //go back to previous page
    previousPage = () => {
        //switch to page3
        const { navigator } = this.props;
        navigator.pop();
    };
    //go back to home page
    goToSpecificPage = () => {
        const { navigator } = this.props;
        var arr_Routes=navigator.getCurrentRoutes(); 
        navigator.popToRoute(arr_Routes[1]); //this method will unmount every other scene after this scense
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
                <Button title="Go To Page 2" onPress = { this.goToSpecificPage } />
                <Button title="Home Page" onPress = { this.homePage } />
            </View>
        );
    }
}

export default Page3;