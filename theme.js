import { StyleSheet } from 'react-native'

const theme = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    padding: 10,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  name: {
    fontSize: 18,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  workoutTitle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  workouttype: {
    fontSize: 14,
  },
  workoutinfo: {
    fontSize: 14,
  },
  input: {
    padding: 5,
    backgroundColor: '#ccc'
  },
  info: {
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontSize: 16,
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
  introtext: {
    color: 'blue',
    alignSelf: 'center',
  },
  text: {
    color: '#666666',
  },
  buttontext: {
    color: 'black',
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5,
  },
  tableCellLabel: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  prevStyle: {
    backgroundColor: '#33c3f0'
  },
  nextStyle: {
    backgroundColor: '#33c3f0'
  }
})

export default theme
