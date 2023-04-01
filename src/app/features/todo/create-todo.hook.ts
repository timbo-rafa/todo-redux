
export type TodoItem = {
    id: string;
    isCompleted: boolean;
    text: string;
}

export function useCreateTodo() {
    return api.createTodo
}

type CreateTodo = { text: string, isCompleted?: boolean }

let id = 1;
const api = {
    createTodo: (todo: CreateTodo) => {
        return new Promise<TodoItem>((resolve) => {
            const newId = id;
            id++;
            setTimeout(() => resolve({
                id: String(newId),
                text: todo.text,
                isCompleted: todo.isCompleted || false
            }
            ), 500)
        })
    }
}