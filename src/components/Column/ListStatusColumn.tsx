import { Grid } from "@mui/material";
import StatusColumn from "./StatusColumn/StatusColumn";

function ListStatusColumn() {
  const statusCol = [
    {
      id: 1,
      name: "In Coming",
    },
    {
      id: 2,
      name: "Doing",
    },
    {
      id: 3,
      name: "Testing",
    },
    {
      id: 4,
      name: "Done",
    },
  ];
  return (
    <Grid container>
      <StatusColumn status={statusCol} />
    </Grid>
  );
}

export default ListStatusColumn;
