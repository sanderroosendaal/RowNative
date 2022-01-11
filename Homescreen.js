import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native'

import WorkoutScreen from './Workout'

import { connect } from 'react-redux'

class HomeScreen extends Component<{}> {
  navigate = (item) => {
    const { navigate } = this.props.navigation

    navigate('Details', { item: item })
  }
  renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item)}
        >
      <View style={styles.workout}>
      <Text style={styles.workouttype}>{item.workouttype}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>{item.date} {item.starttime}</Text>
      <Text style={styles.workoutinfo}>{item.distance}m {item.duration}h</Text>
      </View>
      </TouchableHighlight>
    )
  }
  render() {
    const { workouts } = this.props

    return (
    <View style={styles.container}>
      <FlatList
            data={workouts.results}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
        />
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
