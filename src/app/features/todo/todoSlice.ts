import { createSlice } from '@reduxjs/toolkit'

export type TodoItem = {
    id: string;
    isCompleted: boolean;
    text: string;
}

type TodoState = {
    todoList: TodoItem[]
}

const initialState: TodoState = { todoList: [] }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.todoList.push(action.payload)
        },
        remove: (state, action) => {
            state.todoList = state.todoList.filter(todoItem => todoItem.id === action.payload)
        },
        markAsComplete: (state, action) => {
            const todoItem = state.todoList.find(todoItem => todoItem.id === action.payload)
            if (todoItem) {
                todoItem.isCompleted = true
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, markAsComplete, remove } = todoSlice.actions

export const todoReducer =  todoSlice.reducer