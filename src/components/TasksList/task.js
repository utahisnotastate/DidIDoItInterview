import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View} from 'react-native';
import {Button, Subheading, Title, Paragraph } from 'react-native-paper';

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

export default function Task({ title, note, time }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Title>{title}</Title>
        <Paragraph>{note}</Paragraph>
      </View>
      <View style={styles.main}>
        <Text>{time}</Text>
      </View>
      <View style={styles.main}>
        <Button mode="contained" icon="circle-edit-outline">Edit</Button>
      </View>
    </View>
  );

}

/*
<View style={styles.main}>
        <Text>{category}</Text>
      </View>
 */

