import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default class Day extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>
          {this.props.navigation.state.params.id}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingVertical: 64,
    marginTop: 32,
    backgroundColor: '#fff',
  },
});
