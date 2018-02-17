import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Day from './month/day';


export default class Month extends React.Component {
  render() {

    const messages = this.props.messages > 0 ?
      <View>
        <Text style={styles.notificationText}>
          Tu as encore {this.props.messages} messages à découvrir
        </Text>
      </View> : null;

    const days = this.props.days.map((v, k) => {
      return <Day
        navigation={this.props.navigation}
        key={k}
        day={v.day}
        month={this.props.month}
        year={this.props.year}
        target={v.target}
      />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.monthHeader}>
          <Text style={styles.monthTitle}>
            {this.props.title}
          </Text>
          {messages}
        </View>
        <View style={styles.monthContent}>
          {days}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  monthHeader: {
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 24,
    color: '#333333',
  },
  monthContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  notificationText: {
    fontSize: 16,
    color: '#9B51E0',
  },
});
