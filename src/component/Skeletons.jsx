import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
const Skeletons = () => {
  const arr = new Array(4).fill();
  return (
    <Grid container>
      {arr.map((_, index) => (
        <Grid item xs={3} key={index}>
          <Stack spacing={1}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="text" width={150} />
            <Skeleton variant="rounded" width={210} height={210} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
export default Skeletons;
