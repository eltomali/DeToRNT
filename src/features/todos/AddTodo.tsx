import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import {todoAdded} from './todosSlice';
import {useAppDispatch} from '../../app/store';

const AddTodo = () => {
  const [input, setInput] = useState('');

  const dispatch = useAppDispatch();

  const buttonHandler = () => {
    dispatch(todoAdded(input));
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Write your todo here"
        style={styles.input}
      />
      <View style={styles.addButton}>
        <Button title="Add Todo" onPress={buttonHandler} />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  input: {
    borderBottomWidth: 1.0,
    fontSize: 20,
  },
  addButton: {
    marginVertical: 20,
  },
});
