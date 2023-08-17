import { Container } from '@mui/material';
import { FC } from 'react';

const Layout: FC<{ children: any }> = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default Layout;
