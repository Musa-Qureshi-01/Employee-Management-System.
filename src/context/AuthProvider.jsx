import React, { createContext, useEffect, useState } from 'react';
import { getLocalStoarge, setLocalStoarge } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]); // now just an array

  useEffect(() => {
    setLocalStoarge(); // sets employees and admin in localStorage
    const { employees } = getLocalStoarge();
    setUserData(employees); // now this works correctly
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
