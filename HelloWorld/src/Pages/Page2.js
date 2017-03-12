import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page3 from './Page3'

class Page2 extends Component {
    //go back to previous page
    previousPage = () => {
        //switch to page2
        const { navigator } = this.props;
        navigator.pop();
        Alert.alert(navigator.getCurrentRoutes().length.toString());
    };
    //go to next page
    nextPage = () => {
        //switch to page3
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Page3,
            })
        }
    };
    render() {
        return (
            <View>
                <Text>
                    Hello this is Page 2
                </Text>
                <Button title="Next Page" onPress = { this.nextPage } />
                <Button title="Previous Page" onPress = { this.previousPage } />
            </View>
        );
    }
}

export default Page2;