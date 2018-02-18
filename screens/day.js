import React from 'react';
import moment from 'moment';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import DaysService from './../services/days';

export default class Day extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const slug = navigation.state.params.id.split('-');
    const date = moment(new Date(slug[0], slug[1], slug[2]));

    return {
      title: date.format('DD MMMM YYYY'),
    };
  };

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
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.container}
      >
        {dayComponent}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingVertical: 32,
    backgroundColor: '#fff',
  },
  paragraph: {
    fontSize: 16,
    color: '#4F4F4F',
    marginBottom: 16,
    lineHeight: 20,
  },
});
