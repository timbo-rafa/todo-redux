import { api } from "./fake-api";

export function useCreateTodo() {
    return api.createTodo
}

export function useToggleTodo() {
    return api.updateTodo
}
