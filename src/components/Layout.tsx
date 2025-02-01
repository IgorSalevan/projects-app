import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface ILayoutProps {
  children: ReactNode;
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <main className="flex-1 p-5 box-border">{children}</main>
    </div>
  );
}
