// naming convention of someFeatureSlice.ts.
// "ducks" pattern, suggests that you should put all your action creators and reducers in one file, do named exports of the action creators, and a default export of the reducer function.
// Actions usually need to include some extra data along with the type field. The original Redux code for addTodo has an action object that looks like {type, id, text}. The FSA convention suggests that rather than having data fields with random names directly in the action object, you should always put your data inside a field named payload.

import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Todo = { id: string; text: string };

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.getInitialState({
  status: "idle",
  error: null,
});

// Slice Reducer
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer: todosAdapter.addOne,
      prepare(text: string) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
    todoDeleted: todosAdapter.removeOne,
  },
});

const todosSelectors = todosAdapter.getSelectors<RootState>(
  (state) => state.todos
);

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
} = todosSelectors;

export const { todoAdded, todoDeleted } = todoSlice.actions;

export default todoSlice.reducer;
