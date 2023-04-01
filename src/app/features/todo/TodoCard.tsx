import Card from "@mui/material/Card";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { CardContent } from "@mui/material";
import { todoActions } from "./todoSlice";
import React from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { useCreateTodo } from "./create-todo.hook";

export function TodoCard() {
    const dispatch = useAppDispatch();
    const createTodo = useCreateTodo();
    const handleNewTodo = React.useCallback(async (text: string) => {
        const createdTodo = await createTodo({text})

        dispatch(todoActions.add(createdTodo))
    }, [createTodo, dispatch])
    
    return <Card >
        <CardContent>
            <TodoList />
            <AddTodo onNewTodo={handleNewTodo} />
        </CardContent>
    </Card>
}