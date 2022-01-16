import { StyleSheet } from 'react-native'

const theme = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  workouttype: {
    fontSize: 14,
  },
  workoutinfo: {
    fontSize: 14,
  },
  input: {
    padding: 5,
  },
  info: {
    fontSize: 14,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
    alignSelf: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    alignSelf: 'center',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  buttontext: {
    color: 'black',
  },
})

export default theme
