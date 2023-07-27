import Card from "@mui/material/Card";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { CardContent } from "@mui/material";
import { todoActions } from "./todoSlice";
import React from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { useCreateTodo, useToggleTodo } from "./todo.hooks";
import { TodoItem } from "./TodoItem";

export function TodoCard() {
    const dispatch = useAppDispatch();
    const createTodo = useCreateTodo();
    const handleNewTodo = React.useCallback(async (text: string) => {
        const createdTodo = await createTodo({text})

        dispatch(todoActions.add(createdTodo))
    }, [createTodo, dispatch])

    const toggleTodo = useToggleTodo();
    const handleTodoToggle = React.useCallback(async (todo: TodoItem) => {
        const updatedTodo = await toggleTodo(todo)

        dispatch(todoActions.update(updatedTodo))
    }, [createTodo, dispatch])
    
    return <Card >
        <CardContent>
            <TodoList onTodoToggle={handleTodoToggle}/>
            <AddTodo onNewTodo={handleNewTodo} />
        </CardContent>
    </Card>
}