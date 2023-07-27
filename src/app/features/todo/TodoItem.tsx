import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

export type TodoItem = {
    id: string;
    isCompleted: boolean;
    text: string;
}

export type TodoItemProps = TodoItem & {
    onTodoToggle: (todo: TodoItem) => void
}

export function TodoItem({onTodoToggle, ...todo}: TodoItemProps) {
    return <>
    <Typography >{todo.id}</Typography>
    <Checkbox checked={todo.isCompleted} onClick={() => onTodoToggle(todo)}/>
    <Typography>{todo.text}</Typography>
    </>
}