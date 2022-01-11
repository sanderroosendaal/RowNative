import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class HomeScreen extends Component<{}> {
  render() {
    const { workouts } = this.props
    return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        style={styles.workoutsContainer}
        >
        {
          workouts.results.map((workout, index) => (
            <View style={styles.workout} key={index}>
              <Text style={styles.workouttype}>{workout.workouttype}</Text>
              <Text style={styles.name}>{workout.name}</Text>
              <Text style={styles.date}>{workout.date} {workout.starttime}</Text>
              <Text style={styles.workoutinfo}>{workout.distance}m {workout.duration}h</Text>
            </View>
          )
        )
        }
      </ScrollView>
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  workoutsContainer: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  workout: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  name: {
    fontSize: 18,
  },
  date: {
    fontSize: 14,
    color: '#999'
  },
  workouttype: {
    fontSize: 14,
  },
  workoutinfo: {
    fontSize: 14,
  }
})

const mapStateToProps = (state) => ({
  workouts: state.workoutReducer.workouts
})

export default connect(mapStateToProps) (HomeScreen)
