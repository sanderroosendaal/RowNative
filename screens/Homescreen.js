import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native'

import theme from '../theme'

import { connect } from 'react-redux'

class HomeScreen extends Component {
  navigate(item) {
    const { navigate } = this.props.navigation

    navigate('Details', { item: item })
  }
  renderItem({ item }) {
    return (
      <TouchableHighlight onPress={() => this.navigate(item)}>
        <View style={styles.workout}>
          <Text style={theme.workouttype}>{item.workouttype}</Text>
          <Text style={theme.name}>{item.name}</Text>
          <Text style={theme.date}>
            {item.date} {item.starttime}
          </Text>
          <Text style={theme.workoutinfo}>
            {item.distance}m {item.duration}h
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    const { workouts } = this.props

    return (
      <View style={theme.container}>
        <FlatList
          data={workouts.results}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  workoutsContainer: {
    flex: 1,
  },
  workout: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})

const mapStateToProps = (state) => ({
  workouts: state.workoutReducer.workouts,
  isSignedIn: state.userReducer.isSignedIn,
})

export default connect(mapStateToProps)(HomeScreen)
