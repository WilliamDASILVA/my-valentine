import React from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image } from 'react-native';

export default class Day extends React.Component {
  render() {

    const dayStyle = (isLock) => {
      if (isLock) {
        return {
          container: {
            backgroundColor: '#F2F2F2',
          },
          text: {
            color: '#BDBDBD',
          },
        };
      }

      return {
        container: {
          backgroundColor: '#BB6BD9',
        },
        text: {
          color: '#fff',
        },
      };
    };

    const isLocked = () => {
      const date = moment(new Date(this.props.year, this.props.month, this.props.day));

      return date > moment();
    };

    return (
      <TouchableOpacity
        style={[styles.container, dayStyle(isLocked()).container]}
        onPress={() => !isLocked() && this.props.navigation.navigate('Day', {
          id: `${this.props.year}-${this.props.month}-${this.props.day}`,
        })}
      >
        <Text style={[styles.text, dayStyle(isLocked()).text]}>
          {this.props.day}
        </Text>
        {isLocked() && <Image
          style={styles.lock}
          source={require('./../../assets/img/lock.png')}
        />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#BB6BD9',
    height: 50,
    width: 50,
    borderRadius: 3,
    marginRight: 16,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  lock: {
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
});
