import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TodoItems from "../../TodoItems/TodoItems";

export interface IStatus {
  status: { id: number; name: string }[];
}

function StatusColumn({ status }: IStatus) {
  return (
    <>
      {status.map((stt) => (
        <Grid item xs={3}>
          <Box sx={{ backgroundColor: "red", m: "10px" }}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {stt.name}
            </Typography>

            <TodoItems status={status} />
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default StatusColumn;
