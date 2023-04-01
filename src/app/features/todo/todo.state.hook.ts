import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

export function useTodoState() {
    return useAppSelector(state => state.todo.todoList)
}