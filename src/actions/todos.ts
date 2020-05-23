import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url, config);
    dispatch<FetchTodosAction>({ type: ActionTypes.fetchTodos, payload: response.data });
  }
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
};
