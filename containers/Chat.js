import React from 'react';
import styles from '../assets/styles';

import {
  ImageBackground,
  Button,
  Alert,
} from 'react-native';

const Chat = () => {
  return (
    <ImageBackground
      source={require('../assets/images/chat_bg.png')}
      style={styles.bg}
    >
      <Button
        title="Press me"
        color={styles.PRIMARY_COLOR}
        style={styles.confirmButton}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </ImageBackground>
  );
};

export default Chat;
