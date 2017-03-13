import React, { Component } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';

import Page3 from './Page3'

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: 'Useless Placeholder' 
        };
    }
    //go back to previous page
    previousPage = () => {
        //switch to page2
        const { navigator } = this.props;
        navigator.pop();
    };
    //go to next page
    nextPage = () => {
        //switch to page3
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Page3,
                passProps: this.state
            })
        }
    };
    render() {
        return (
            <View>
                <Text>
                    Hello this is Page 2
                </Text>
                <Text>
                    Please type your name and go next page
                </Text>
                <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                />
                <Button title="Next Page" onPress = { this.nextPage } />
                <Button title="Previous Page" onPress = { this.previousPage } />
            </View>
        );
    }
}

export default Page2;