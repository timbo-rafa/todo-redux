import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { TodoItem, TodoItemProps } from "./TodoItem"
import { useTodoState } from "./todo.state.hook"
import React from "react"

export type TodoListProps = {
    onTodoToggle: TodoItemProps['onTodoToggle']
}

export function TodoList({ onTodoToggle }: TodoListProps) {
    const todos = useTodoState()

    const todoListContent = React.useMemo(() => todos.map(todo => <TodoItem key={todo.id} {...todo} onTodoToggle={onTodoToggle} />), [todos, onTodoToggle])

    if (todos.length === 0) {
        return <Typography> No Todos </Typography>
    }
    return <List>
        {todoListContent}
    </List>
}