import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import TodoItems from "../TodoItems/TodoItems";

export interface IText {
  text: string;
}
function AddNewTodoBox() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<any>([]);
  const handleSubmit = () => {
    setTodos((prev: any) => [...prev, todo]);
    // setTodo("");
  };
  console.log(todo);
  return (
    <div>
      <Box sx={{ display: "flex", ml: "20px" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add new to do"
            inputProps={{ "aria-label": "Add new to do" }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Paper>
        <Button
          sx={{ ml: "5px" }}
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
      <TodoItems todos={todos || ""} />
    </div>
  );
}

export default AddNewTodoBox;
