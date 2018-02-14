import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Day extends React.Component {
  render() {
    
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate('Day', {
          id: this.props.day,
        })}
      >
        <Text style={styles.text}>
          {this.props.day}
        </Text>
        <View style={styles.notificationDot}></View>
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
  notificationDot: {
    position: 'absolute',
    right: 4,
    top: 4,
    backgroundColor: '#fff',
    height: 8,
    width: 8,
    borderRadius: 8,
  },
});
