import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Month from './../components/month';

import DaysService from './../services/days';

export default class Months extends React.Component {
  render() {
    // Months list
    const monthsList = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mail',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Decembre',
    ];
    
    // Transform year / month array to a month only array
    const monthsValues = [];
    const monthsReturned = DaysService.getContent()
      .map((year) => {
        const months = year.months.map((month) => {
          month.title = `${monthsList[month.month]} ${year.year}`;
          month.year = year.year;

          return month;
        });

        return year.months;
      })
      .forEach((year) => {
        year.forEach((month) => {
          monthsValues.push(month);
        });
      });

    const monthListComponent = monthsValues
      .map((month, k) => {
        return <Month
          key={k}
          navigation={this.props.navigation}
          title={month.title}
          days={month.days}
          month={month.month}
          year={month.year}
          unread={10}
        />;
      });
    console.log('months', monthsValues);
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {monthListComponent}
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
