import { TodoItem } from "./TodoItem";

type CreateTodo = { text: string, isCompleted?: boolean }
type UpdateTodo = { id: string ; text: string, isCompleted?: boolean }

let id = 1;
export const api = {
    createTodo: (todo: CreateTodo) => {
        return new Promise<TodoItem>((resolve) => {
            const newId = id;
            id++;
            setTimeout(() => resolve({
                id: String(newId),
                text: todo.text,
                isCompleted: todo.isCompleted || false
            }
            ), 10)
        })
    },
    updateTodo: ({id, text, isCompleted}: UpdateTodo) => {
        return new Promise<TodoItem> ((resolve) => {
            setTimeout(() => resolve({
                id: String(id),
                text,
                isCompleted: !isCompleted
            }), 10)
        })
    }
}