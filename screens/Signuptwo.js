import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

import theme from '../theme'

function SignUpTwo(props) {

  const [open, setOpen] = useState(false)

  return (
    <View style={theme.container}>
    <DatePicker
      modal
      open={open}
      date={props.birthdate}
     onConfirm={(date) => {
       setOpen(false)
       props.setDate(date)
     }}
     onCancel={() => {
       setOpen(false)
     }}
   />
      <Text style={theme.label}>I have read and accepted the User Agreement</Text>
    </View>
  )
}

export default SignUpTwo
