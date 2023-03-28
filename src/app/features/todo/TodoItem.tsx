import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { TodoItem } from "./todoSlice";

export type TodoItemProps = TodoItem
export function TodoItem({isCompleted, text}: TodoItemProps) {
    return <>
    <Checkbox checked={isCompleted} />
    <Typography>{text}</Typography>
    </>
}