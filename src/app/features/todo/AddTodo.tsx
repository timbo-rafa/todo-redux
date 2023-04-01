import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export type AddTodoProps = {
    onNewTodo: (todoText: string) => void
}

export function AddTodo({onNewTodo}: AddTodoProps) {
    const [todoText, setTodoText] = React.useState("")

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    }, [setTodoText])

    const handleClick = React.useCallback(() => {
        onNewTodo(todoText);
    }, [onNewTodo, todoText])

    return <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
              value={todoText}
              onChange={handleChange} />
        </Box>
        <Button onClick={handleClick}>Add Todo </Button>
    </>
}