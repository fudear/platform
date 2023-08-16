import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
    <AppBar position="relative" color="transparent">
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
