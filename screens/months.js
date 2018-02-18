import React from 'react';
import moment from 'moment';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Month from './../components/month';

import DaysService from './../services/days';

export default class Months extends React.Component {
  render() {
    // Months list
    const monthsList = moment.months()
      .map(month => month.charAt(0).toUpperCase() + month.slice(1));
    
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
        const messagesToDiscover = month.days.filter((day) => {
          const date = moment(new Date(month.year, month.month, day.day));

          return day && moment() < date;
        });

        return <Month
          key={k}
          navigation={this.props.navigation}
          title={month.title}
          days={month.days}
          month={month.month}
          year={month.year}
          messages={messagesToDiscover.length}
        />;
      });
    
    return (
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.container}
      >
        {monthListComponent}
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
});
