import React, { useState, useContext, useEffect } from 'react';

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem('user') || '',
    role: localStorage.getItem('user') || '',
  });

  useEffect(() => {
    if (localStorage.getItem('username').length > 0) {
      return;
    } else {
      localStorage.setItem('username', JSON.stringify(userInfo.username));
      localStorage.setItem('role', JSON.stringify(userInfo.role));
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
