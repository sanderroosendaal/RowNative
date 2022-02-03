import React from 'react'
import { View, Text, CheckBox } from 'react-native'

import theme from '../theme'

function SignUpTwo(props) {

  return (
    <View style={theme.container}>
      <CheckBox
        value={props.checked}
        onValueChange={props.setChecked}
        style={theme.checkbox}
      />
      <Text style={theme.label}>I have read and accepted the User Agreement</Text>
    </View>
  )
}

export default SignUpTwo
