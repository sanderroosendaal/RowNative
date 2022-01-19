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
    textAlign: "center",
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
    marginBottom: 2,
  },
  tableCell: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 2,
  },
  tableCellLabel: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 2,
    backgroundColor: '#ccc',
  },
})

export default theme
