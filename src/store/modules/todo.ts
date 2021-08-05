import { Module } from 'vuex';
import { State } from '../index';

type Todo = {
    id: number,
    name: string,
    completed: boolean
}

const initialState = {
    todos: [{
        id: 123,
        name: 'ss',
        completed: true
    }] as Todo[]
};

export type TodoState = typeof initialState;

export default {
    namespaced: true,
    state: initialState,
    mutations: {
        addTodo(state, payload: Todo) {
            state.todos.push(payload);
        }
    }
} as Module<TodoState, State>;