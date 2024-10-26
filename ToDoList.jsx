import React from "react";
import { FlatList, Text } from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Text>{item.value}</Text>}
    />
  );
};

export default ToDoList;
