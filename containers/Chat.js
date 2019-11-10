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
      txnID: '0xiuhe2u8921heouhad0hj89ha89shd0w2niodjw2l',
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
