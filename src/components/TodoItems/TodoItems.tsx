import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { IStatus } from "../Column/StatusColumn/StatusColumn";

const ITEM_HEIGHT = 48;

function TodoItems({ status }: IStatus) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Card
        sx={{ maxWidth: "100%", height: "70px", m: "20px", display: "flex" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Hello
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {status.map((listStatusInMenu) => (
                <MenuItem
                  key={listStatusInMenu.name}
                  selected={listStatusInMenu.name === "Pyxis"}
                  onClick={handleClose}
                >
                  {listStatusInMenu.name}
                </MenuItem>
              ))}
            </Menu>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TodoItems;
