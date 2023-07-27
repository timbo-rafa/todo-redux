import { createSlice } from '@reduxjs/toolkit'
import { TodoItem } from './TodoItem'



type TodoState = {
    todoList: TodoItem[]
}

type Action<T> = {payload: T}

type AddTodoAction = Action<TodoItem>
type UpdateTodoAction = Action<TodoItem>


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
        update: (state, action: UpdateTodoAction) => {
            const todoItemIndex = state.todoList.findIndex(todoItem => todoItem.id === action.payload.id)
            if (todoItemIndex !== -1) {
                state.todoList[todoItemIndex] = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const todoActions = todoSlice.actions

export const todoReducer = todoSlice.reducer