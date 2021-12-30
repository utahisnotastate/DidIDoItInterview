import React from "react"
import { View, StyleSheet, ScrollView } from "react-native";
import { Field, TextInput, Formik } from 'formik';
import { Button } from 'react-native-paper';
import Autocomplete from "react-native-autocomplete-input"
import { useSelector, useDispatch } from "react-redux";
import { Title, Paragraph } from 'react-native-paper';
import { addTask } from "../../redux/reducers";
import _ from "underscore"

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});

export default function NewTask() {
  const tasks = useSelector(state => state.tasklist)
  const tasktitles = tasks.map(task => task.title)
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(addTask(values))
  }
  return (
    <Formik
      initialValues={{
        title: "",
        note: "",
        time: ""
      }
      }
      onSubmit={handleSubmit}
    >

      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
          />
          <TextInput
            onChangeText={handleChange("note")}
            onBlur={handleBlur("note")}
            multiline
            value={values.note}
          />

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  )
}

/*
<View style={styles.autocompleteContainer}>
          <Autocomplete
            data={tasktitles}
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
            value={values.title}
            flatListProps={{
              keyExtractor: (item, index) => item,
              renderItem: ({ item }) => <Title>{item}</Title>
            }
            }
          />
        </View>
 */