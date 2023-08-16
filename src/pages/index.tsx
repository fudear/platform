import Typography from "@mui/material/Typography";
import { FC } from "react";


import Test from '../components/Test'

const Home: FC<{}> = () => {

  
  return (
  <div>  
    <Typography variant="h3">CleanHelp
    </Typography>
    <Test/>
  </div>
  );
};

export default Home;
