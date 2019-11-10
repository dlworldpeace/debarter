import React from 'react';
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    
  }

import {
    View,
    Text,
} from 'react-native';

class Confirm_Deny extends React.Component {
    render() {
        return(
            <View>
                <Text>
                Do you want to confirm the transcation?
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Confirm"
                    />
                </View>
            </View>
        );
    }
}

export default Confirm_Deny