import React from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const ToDoForm = ({ task, setTask, addTask }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },
});

export default ToDoForm;
