import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { TodoItem as TodoItemType } from "./create-todo.hook";

export type TodoItemProps = TodoItemType
export function TodoItem({id, isCompleted, text}: TodoItemProps) {
    return <>
    <Typography >{id}</Typography>
    <Checkbox checked={isCompleted} />
    <Typography>{text}</Typography>
    </>
}