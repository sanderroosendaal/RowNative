import React from "react";
import { View, Text } from "react-native";
import theme from "../theme";
import PropTypes from 'prop-types';

export default class TableDataRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={theme.tableRow}>
        <View style={theme.tableCellLabel}>
          <Text style={theme.info}>{this.props.label}:</Text>
        </View>
        <View style={theme.tableCell}>
          <Text style={theme.value}>{this.props.value}</Text>
        </View>
      </View>
    );
  }
}

TableDataRow.propTypes = { label: PropTypes.string.isRequired, value: PropTypes.string.isRequired };
