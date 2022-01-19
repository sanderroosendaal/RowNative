import React from 'react'
import { View, Text } from 'react-native'
import { Workout } from "../types/entities";

import theme from '../theme'
import TableDataRow from "../components/TableDataRow";

export default class WorkoutScreen extends React.Component {
  private workout: Workout;

  constructor(props) {
    super(props);
    this.workout = props.route.params.item
  }

  renderDataRow(label, value) {
    return (
      <View style={theme.tableRow}>
        <View style={theme.tableCellLabel}>
          <Text style={theme.info}>{label}</Text>
        </View>
        <View style={theme.tableCell}>
          <Text style={theme.value}>{value}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={theme.container}>
        <View style={theme.workoutTitle}>
          <Text style={theme.info}>{this.workout.workouttype}</Text>
          <Text style={theme.name}>{this.workout.name}</Text>
        </View>
        <Text style={theme.date}>
          {this.workout.date} {this.workout.starttime}
        </Text>
        <View style={theme.table}>
          <TableDataRow label='Distance' value={this.workout.distance} />
          <TableDataRow label='Duration' value={this.workout.duration} />
          <TableDataRow label='Average HR' value={this.workout.averagehr} />
          <TableDataRow label='Max HR' value={this.workout.maxhr} />
        </View>
      </View>
    )
  }
}

