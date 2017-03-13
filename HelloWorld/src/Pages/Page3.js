import React, {Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';

import Page4 from './Page4'
class Page3 extends Component {
    //go back to previous page
    previousPage = () => {
        //switch to page2
        const { navigator } = this.props;
        navigator.pop();
    };
    //go to next page
    nextPage = () => {
        //switch to page4
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Page4,
            })
        }
    };
    render() {
        const { text } = this.props;
        return (
            <View>
                <Text>
                   Hello { text }
                </Text>
                <Button title="Next Page" onPress = { this.nextPage } />
                <Button title="Previous Page" onPress = { this.previousPage } />
            </View>
        );
    }
}

export default Page3;