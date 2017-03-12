import React, {Component} from 'react';
import { View, Text, Button,Alert } from 'react-native';

import Page2 from './Page2'
class Page1 extends Component {
    nextPage = () => {
        //switch to page2
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Page2,
            })
        }
    };
    render() {
        return (
            <View>
                <Text>
                    Hi This is Home Page
                </Text>
                <Button onPress = {this.nextPage} title="Next Page"/>
            </View>
        );
    }
}

export default Page1;