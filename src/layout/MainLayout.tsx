import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AppShell
      padding="md"
      navbar={{ width: 280,  breakpoint: 'sm',}}
      header={{ height: 130 }}
      style={{ overflow: 'visible' }} 
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main
        style={{
          minWidth: 0    
        }}
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};