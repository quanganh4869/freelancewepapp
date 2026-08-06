import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_USERS } from '../data/seedData';

const AuthContext = createContext();

export const ADMIN_EMAIL = 'quanganhqb04@gmail.com';

export const AuthProvider = ({ children }) => {
  const [activeRole, setActiveRole] = useState(() => {
    const role = localStorage.getItem('nexus_role') || 'GUEST';
    const email = localStorage.getItem('nexus_user_email');
    if (role === 'ADMIN' && email && email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      return 'GUEST';
    }
    return role;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const role = localStorage.getItem('nexus_role') || 'GUEST';
    const email = localStorage.getItem('nexus_user_email');

    if (role === 'ADMIN') {
      return { ...DEMO_USERS.admin, email: ADMIN_EMAIL };
    }
    if (role === 'USER') {
      return {
        ...DEMO_USERS.client,
        email: email || DEMO_USERS.client.email
      };
    }
    return null;
  });

  const [authError, setAuthError] = useState('');

  useEffect(() => {
    localStorage.setItem('nexus_role', activeRole);
    if (activeRole === 'ADMIN') {
      setCurrentUser({ ...DEMO_USERS.admin, email: ADMIN_EMAIL });
      localStorage.setItem('nexus_user_email', ADMIN_EMAIL);
    } else if (activeRole === 'USER') {
      if (!currentUser || currentUser.role !== 'USER') {
        setCurrentUser(DEMO_USERS.client);
      }
      localStorage.setItem('nexus_user_email', currentUser?.email || DEMO_USERS.client.email);
    } else {
      setCurrentUser(null);
      localStorage.removeItem('nexus_user_email');
    }
  }, [activeRole]);

  const clearAuthError = () => setAuthError('');

  // Attempt login with explicit email authorization rules
  const loginWithEmail = (emailInput, password, targetRole = 'USER') => {
    setAuthError('');
    if (!emailInput || !emailInput.trim()) {
      setAuthError('Vui lòng nhập Email.');
      return false;
    }

    const cleanEmail = emailInput.trim().toLowerCase();

    if (targetRole === 'ADMIN') {
      if (cleanEmail !== ADMIN_EMAIL.toLowerCase()) {
        setAuthError(`Quyền truy cập bị từ chối! Chỉ tài khoản ${ADMIN_EMAIL} mới có quyền đăng nhập Admin.`);
        return false;
      }
      setActiveRole('ADMIN');
      setCurrentUser({
        ...DEMO_USERS.admin,
        email: ADMIN_EMAIL
      });
      localStorage.setItem('nexus_role', 'ADMIN');
      localStorage.setItem('nexus_user_email', ADMIN_EMAIL);
      return true;
    } else {
      setActiveRole('USER');
      setCurrentUser({
        ...DEMO_USERS.client,
        email: cleanEmail || DEMO_USERS.client.email
      });
      localStorage.setItem('nexus_role', 'USER');
      localStorage.setItem('nexus_user_email', cleanEmail || DEMO_USERS.client.email);
      return true;
    }
  };

  const switchRole = (role) => {
    setAuthError('');
    if (role === 'ADMIN') {
      setActiveRole('ADMIN');
      setCurrentUser({
        ...DEMO_USERS.admin,
        email: ADMIN_EMAIL
      });
      localStorage.setItem('nexus_role', 'ADMIN');
      localStorage.setItem('nexus_user_email', ADMIN_EMAIL);
      return;
    }
    if (role === 'USER') {
      setActiveRole('USER');
      setCurrentUser(DEMO_USERS.client);
      localStorage.setItem('nexus_role', 'USER');
      localStorage.setItem('nexus_user_email', DEMO_USERS.client.email);
      return;
    }
    setActiveRole('GUEST');
    setCurrentUser(null);
    localStorage.setItem('nexus_role', 'GUEST');
    localStorage.removeItem('nexus_user_email');
  };

  const logout = () => {
    setActiveRole('GUEST');
    setCurrentUser(null);
    setAuthError('');
    localStorage.setItem('nexus_role', 'GUEST');
    localStorage.removeItem('nexus_user_email');
  };

  return (
    <AuthContext.Provider
      value={{
        activeRole,
        currentUser,
        authError,
        clearAuthError,
        loginWithEmail,
        switchRole,
        logout,
        isGuest: activeRole === 'GUEST',
        isUser: activeRole === 'USER',
        isAdmin: activeRole === 'ADMIN' && currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

