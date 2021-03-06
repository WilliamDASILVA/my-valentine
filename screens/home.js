import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Month from './../components/month';

export default class Months extends React.Component {
  getStarted() {
    this.props.navigation.navigate('Months');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Months')}
        >
          <Image
            source={require('./../assets/img/logo.png')}
          />
          <Text style={styles.start}>
            {'Commencer'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  start: {
    marginTop: 32,
    fontSize: 16,
    color: '#BB6BD9',
  },
});
