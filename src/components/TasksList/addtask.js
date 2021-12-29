import React from "react"
import {View} from "react-native";
import {Button, Dialog, Portal} from "react-native-paper";

export default function Addtask({task}) {
    const [visible, setVisible] = React.useState(false);
    const [content, setContent] = React.useState();

    const showDialog = (task) => {
      setVisible(true);
      setContent(task);

    };

    const hideDialog = () => setVisible(false);

    return (
        <View>
            <Button mode="contained" icon="circle-edit-outline" onPress={showDialog}>
                Add Task
            </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Add Task</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={hideDialog}>Add</Button>
            </Dialog.Actions>
          </Dialog>
          </Portal>
        </View>
    );
}
