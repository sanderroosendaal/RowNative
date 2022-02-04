import React, { useState } from 'react'
import { View, Text, CheckBox } from 'react-native'

import theme from '../theme'

function SignUpThree(props) {

  return (
    <View style={theme.container}>
      <CheckBox
        disabled={false}
        value={props.checked}
        onValueChange={props.setChecked}
        style={theme.checkbox}
      />
      <Text style={theme.label}>I have read and accepted the User Agreement</Text>
    </View>
  )
}

export default SignUpThree
