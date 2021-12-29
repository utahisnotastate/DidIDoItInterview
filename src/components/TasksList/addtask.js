import React from "react"
import {View, StyleSheet} from "react-native";
import {Button, Dialog, Portal, Appbar} from "react-native-paper";
import { useSelector, useDispatch } from 'react-redux'
import {setVisible} from "../../redux/addtaskdialog";

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function Addtask() {
    const visible = useSelector(state => state.addtaskdialog)
    const dispatch = useDispatch()

    const showDialog = () => {
      dispatch(visible())

    };

    const hideDialog = () => setVisible(false);

    return (
      <View>
        <Button mode="contained" icon="circle-edit-outline" onPress={() => dispatch(setVisible())}>
          Add Task
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Add Task</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={() => dispatch(setVisible())}>Cancel</Button>
              <Button onPress={hideDialog}>Add</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
}

/*

 */
