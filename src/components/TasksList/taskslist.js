import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Task from "./task";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const TasksList = ({tasks}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task category={item.category} title={item.title} note={item.note} time={item.time} />}
      />
    </View>
  );
}

export default TasksList;
