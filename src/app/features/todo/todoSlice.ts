import { createSlice } from '@reduxjs/toolkit'
import { TodoItem } from './create-todo.hook'



type TodoState = {
    todoList: TodoItem[]
}

type AddTodoAction = { payload: TodoItem }


const initialState: TodoState = { todoList: [] }

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        add: (state, action: AddTodoAction) => {
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
export const todoActions = todoSlice.actions

export const todoReducer = todoSlice.reducer