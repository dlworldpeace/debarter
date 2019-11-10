import React, { Component } from 'react';
import styles from '../assets/styles';

import {
  ImageBackground,
  Button,
  View,
  Alert,
  Text,
} from 'react-native';

class Chat extends Component {

  constructor() {
    super();
    this.state = {
      buttonShown: true,
      txnIDShown: false,
      txnID: '0xa91bdf47aea48289ce483cad2fe2f229d6275d61e5fa66e9b6bf387f4752dc04',
    };
  }

  onConfirmDeal = () => {
    Alert.alert('Great deal, a transaction token has been generated using Smart Contract.');
    this.setState({ buttonShown: false });
    this.setState({ txnIDShown: true });
  };

  render () {
    return (
      <ImageBackground
        source={require('../assets/images/chat_bg.png')}
        style={styles.bg}
      >
        {this.state.txnIDShown ? (
          <View style={styles.containerMessages}>
            <Text style={styles.transactionID}>
              {this.state.txnID}
            </Text>
          </View>
        ) : null}
        {this.state.buttonShown ? (
          <View style={styles.containerMessages}>
            <View style={styles.bottom}>
              <Button
                title="I Confirm The Deal!"
                style={styles.confirmButton}
                onPress={() => this.onConfirmDeal()}
              />
            </View>
          </View>
        ) : null}
      </ImageBackground>
    );
  }
};

export default Chat;
