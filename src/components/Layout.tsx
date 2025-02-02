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
  const { message, setMessage } = useStore((store) => store);

  useEffect(() => {
    if (message) {
      setMessage('');
    }
  }, [message]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 pl-0 sm:p-5 box-border">{children}</main>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
