

import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AppShell
      padding="md"
      navbar={{ width: 280 }}
      header={{ height: 130 }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};