import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Month from './../components/month';

export default class Months extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Month
          navigation={this.props.navigation}
          month='Février 2018'
          unread={10}
        />
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
