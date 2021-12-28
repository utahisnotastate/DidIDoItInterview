import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },

});

export default function Task({ category, title, note, time, key }) {
  return (
    <View style={styles.container}>
      <Text>{category}</Text>
      <Text>{title}</Text>
      <Text>{note}</Text>
      <Text>{time}</Text>
    </View>
  )
}