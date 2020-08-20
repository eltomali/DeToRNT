import React, { useState, FC } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { todoAdded } from "./todosSlice";
import { useAppDispatch } from "../../app/store";
import { TodosNavProps } from "../../app/types";

const AddTodo = ({ navigation }: TodosNavProps<"AddTodo">) => {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

  const buttonHandler = () => {
    dispatch(todoAdded(input));
    setInput("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Write your todo here"
      />
      <View style={styles.addButton}>
        <Button title="Add Todo" onPress={buttonHandler} />
      </View>
    </View>
  );
};

export default AddTodo;

export const screenOptions = {
  headerTitle: "",
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  addButton: {
    marginTop: 20,
  },
});
