import { Box, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <div>
      <Box>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            mt: "20px",
            ml: "20px",
          }}
        >
          Todo List
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
