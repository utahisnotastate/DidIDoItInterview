import React from "react";
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',

  },
  text: {
    fontSize: 18,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  }
});

export default function Task({ category, title, note, time, key }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>{category}</Text>
      </View>
      <View style={styles.main}>
        <Text>{title}</Text>
        <Text>{note}</Text>
      </View>
      <View style={styles.main}>
        <Text>{time}</Text>
      </View>
    </View>
  );

}

/*

 */

