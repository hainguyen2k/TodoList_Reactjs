import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";

function AddNewTodoBox() {
  
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
          />
        </Paper>
        <Button
          sx={{ ml: "5px" }}
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
    </div>
  );
}

export default AddNewTodoBox;
