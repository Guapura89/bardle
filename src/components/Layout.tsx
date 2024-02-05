import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

const GameLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
};

export { MainLayout, GameLayout };
