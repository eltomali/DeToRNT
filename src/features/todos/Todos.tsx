import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";

import { TodosNavProps } from "../../app/types";
import { todoDeleted, selectAllTodos } from "./todosSlice";
import { useAppDispatch, RootState } from "../../app/store";

const Main: FC = () => {
  const todos = useSelector(selectAllTodos);

  const { status, error } = useSelector((state: RootState) => state.todos);

  const dispatch = useAppDispatch();

  const deleteTodoHandler = (id: string) => {
    dispatch(todoDeleted(id));
  };

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading: {status}</Text>
        <Text>ERROR: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {status === "loading" ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.title}>
            <Text>My Todos</Text>
          </View>
          <View style={styles.todos}>
            <FlatList
              data={todos}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={(itemData) => (
                <TouchableOpacity
                  onPress={() => deleteTodoHandler(itemData.item.id)}
                >
                  <Text>{itemData.item.text}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  title: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  todos: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;

export const screenOptions = ({ navigation }: TodosNavProps<"Main">) => {
  return {
    headerTitle: "",
    headerRight: () => (
      <Button onPress={() => navigation.navigate("AddTodo")} title="Add Todo" />
    ),
  };
};
