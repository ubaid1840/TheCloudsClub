import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import SimpleSidebar from './Sidebar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AdminLayout = ({ children }) => {

  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID == 1 && isAuthenticated) {
      // router.replace('/admin-panel/dashboard')
    } else {
      router.replace("/");
    }
  }, []);

  return (
    <div style={{width:'100vw', minHeight:'100vh'}}>
      <SimpleSidebar >
      {children}
      </SimpleSidebar>
      </div>
  );
};

export default AdminLayout;
