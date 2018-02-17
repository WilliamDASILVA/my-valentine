import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/home';
import Months from './screens/months';
import Day from './screens/day';

moment.locale('fr');

const navigationOptions = {
  headerTintColor: '#BB6BD9',
  headerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    margin: 0,
  },
  containerStyle: {
    backgroundColor: 'white',
  },
};

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Months: {
      screen: Months,
    },
    Day: {
      screen: Day,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions,
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
