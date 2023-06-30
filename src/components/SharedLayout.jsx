import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Container } from '@mui/material';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
