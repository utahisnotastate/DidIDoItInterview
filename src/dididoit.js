import React, {useState} from "react";
import { StyleSheet, View } from 'react-native';
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


const data = [
  {key: 1, category: 'Work', title: 'Task 1', note: "This is an extra note", time: "1/12/2022"},
  {key: 2, category: 'Work', title: 'Task 2', note: "This is an extra note", time: "1/12/2022"},
  {key: 3, category: 'Work', title: 'Task 3', note: "This is an extra note", time: "1/12/2022"},
  {key: 4, category: 'Work', title: 'Task 4', note: "This is an extra note", time: "1/12/2022"},
  {key: 5, category: 'Work', title: 'Task 5', note: "This is an extra note", time: "1/12/2022"},
  {key: 6, category: 'Work', title: 'Task 6', note: "This is an extra note", time: "1/12/2022"},
  {key: 7, category: 'Work', title: 'Task 7', note: "This is an extra note", time: "1/12/2022"},

]
export default function DidIDoIt() {
  const [tasks, setTasks] = useState(data)
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