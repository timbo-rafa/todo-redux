import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { TodoItem } from "./TodoItem"
import { useTodoState } from "./todo.state.hook"
import React from "react"

export function TodoList() {
    const todos = useTodoState()

    const todoListContent = React.useMemo(() => todos.map(todo => <TodoItem key={todo.id} {...todo} />), [todos])

    if (todos.length === 0) {
        return <Typography> No Todos </Typography>
    }
    return <List>
        {todoListContent}
    </List>
}