import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const Home: FC<{}> = () => {
  return (
    <Stack>
      <Typography variant="h3">Total amount collected</Typography>
      <Typography variant="h1">$123,456,789</Typography>

      <Stack direction="row">
        <Stack>
          <Typography variant="h5">Last 7 days</Typography>
          <Typography variant="h3">$1,234.00</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Last 24 hours</Typography>
          <Typography variant="h3">$12.00</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
