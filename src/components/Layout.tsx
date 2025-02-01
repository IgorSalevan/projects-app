'use client';

import { ReactNode, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import { useStore } from '@/store';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const { error, setError } = useStore((store) => store);

  useEffect(() => {
    if (error) {
      console.log(error);
      setError('');
    }
  }, [error]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-5 box-border">{children}</main>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
