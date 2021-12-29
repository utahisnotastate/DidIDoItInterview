import React, {useState} from "react";
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Taskslist from "./components/TasksList/taskslist";
import {Portal} from "react-native-paper";
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'lightgray',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});



export default function DidIDoIt() {
  const tasks = useSelector(state => state.tasklist)
    return (
        <View style={styles.container}>
          <Portal.Host>
            <Appbar.Header>
            <Appbar.Content title="Did I Do It?" />
          </Appbar.Header>
            <Taskslist tasks={tasks} />
          </Portal.Host>
        </View>
    )
}