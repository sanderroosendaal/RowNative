import React from 'react'
import { View, Text } from 'react-native'

import theme from '../theme'

function WorkoutScreen({ route }) {
  const { item } = route.params

  return (
    <View style={theme.container}>
      <Text style={theme.info}>{item.workouttype}</Text>
      <Text style={theme.name}>{item.name}</Text>
      <Text style={theme.date}>
        {item.date} {item.starttime}
      </Text>
      <Text style={theme.info}>Distance: {item.distance}</Text>
      <Text style={theme.info}>Duration: {item.duration}</Text>
      <Text style={theme.info}>Average HR: {item.averagehr}</Text>
      <Text style={theme.info}>Max HR: {item.maxhr}</Text>
    </View>
  )
}

export default WorkoutScreen
