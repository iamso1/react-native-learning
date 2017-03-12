import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page3 from './Page3'

class Page2 extends Component {
    //go back to previous page
    previousPage = () => {
        Alert.alert('clicked');
        //switch to page2
        const { navigator } = this.props;
        navigator.pop();
    };
    //go to next page
    nextPage = () => {
        Alert.alert('clicked');
        //switch to page2
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