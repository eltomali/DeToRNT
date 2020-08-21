import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';

// import {TodosNavProps} from '../../app/types';
import {todoDeleted, selectAllTodos} from './todosSlice';
import {useAppDispatch, RootState} from '../../app/store';
import AddTodo from './AddTodo';

const Main: FC = () => {
  const todos = useSelector(selectAllTodos);

  const {status, error} = useSelector((state: RootState) => state.todos);

  const dispatch = useAppDispatch();

  const deleteTodoHandler = (id: string) => {
    dispatch(todoDeleted(id));
  };

  if (error) {
    return (
      <View style={{flex: 1}}>
        <Text>Loading: {status}</Text>
        <Text>ERROR: {error}</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>My Todos</Text>
      </View>
      <AddTodo />
      <View style={styles.container}>
        {status === 'loading' ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.todos}>
              <FlatList
                data={todos}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={(itemData) => (
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => deleteTodoHandler(itemData.item.id)}>
                    <Text style={styles.listItemText}>
                      {itemData.item.text}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  title: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
  },
  todos: {
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 0.25,
    borderColor: 'grey',
    marginVertical: 10,
  },
  listItemText: {
    marginVertical: 10,
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
