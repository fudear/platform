import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Contribute
        </Typography>
        <Button color="inherit" variant="text">
          Profile
        </Button>
        <Button color="primary" variant="contained" sx={{ marginLeft: 2 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
