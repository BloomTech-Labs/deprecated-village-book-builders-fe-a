import React, { useState, useContext, useEffect } from 'react';

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem('username') || null,
    role: localStorage.getItem('role') || null,
  });

  useEffect(() => {
    if (
      !localStorage.getItem('username') === null ||
      !localStorage.getItem('role') === null
    ) {
      return;
    } else {
      localStorage.setItem('username', userInfo.username);
      localStorage.setItem('role', userInfo.role);
    }
  }, [userInfo]);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
