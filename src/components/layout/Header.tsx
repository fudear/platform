import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { useBalance } from 'wagmi';

const Header = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { data } = useBalance({
    address: address,
  });

  console.log(data);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Truth cycle
          </Typography>
          <Button color="inherit" variant="text">
            <AccountCircleIcon />
          </Button>
          {isConnected && (
            <Typography variant="h6">{`${address?.slice(0, 7)}...`}</Typography>
          )}
          {
            <Button
              color="primary"
              variant="contained"
              sx={{ marginLeft: 2 }}
              onClick={() => open()}
            >
              {isConnected ? 'Disconnect' : 'Login'}
            </Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
