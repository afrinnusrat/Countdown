import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an Event'
    }),
  },
});
