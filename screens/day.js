import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import DaysService from './../services/days';

export default class Day extends React.Component {
  render() {
    const content = DaysService
      .getDay(this.props.navigation.state.params.id);

    const dayComponent = content.content.map((paragraph, k) => {
      return <Text
        key={k}
        style={styles.paragraph}
      >
        {paragraph}
      </Text>;
    });

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {dayComponent}
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
  paragraph: {
    fontSize: 16,
    color: '#4F4F4F',
    marginBottom: 16,
    lineHeight: 20,
  },
});
