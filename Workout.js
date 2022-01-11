import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


function WorkoutScreen ({ route }) {
  const { name, item } = route.params;


  return (
    <View style={styles.workout}>
    <Text style={styles.info}>{ item.workouttype }</Text>
    <Text style={styles.title}>{ item.name }</Text>
    <Text style={styles.date}>{item.date} {item.starttime}</Text>
    <Text style={styles.info}>Distance: { item.distance }</Text>
    <Text style={styles.info}>Duration: { item.duration }</Text>
    <Text style={styles.info}>Average HR: { item.averagehr }</Text>
    <Text style={styles.info}>Max HR: { item.maxhr }</Text>
    </View>
  );
}


export default WorkoutScreen

const styles = StyleSheet.create({
  workout: {
    flex: 1,
    padding: 20,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
  },
  date: {
    fontSize: 14,
    color: '#999'
  },
  info: {
    fontSize: 14,
  }
})
