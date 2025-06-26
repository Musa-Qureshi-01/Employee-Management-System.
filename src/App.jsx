import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStoarge, setLocalStoarge } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData] = useContext(AuthContext); // from AuthProvider

  useEffect(() => {
    setLocalStoarge(); // Initialize localStorage only once (if not already set)

    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStoarge();

    const foundAdmin = admin.find((a) => a.email === email && a.password === password);
    if (foundAdmin) {
      const adminData = { role: 'admin', data: foundAdmin };
      setLoggedInUser(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify(adminData));
      return;
    }

    const employee = employees.find((e) => e.email === email && e.password === password);
    if (employee) {
      const employeeData = { role: 'employee', data: employee };
      setLoggedInUser(employeeData);
      localStorage.setItem('loggedInUser', JSON.stringify(employeeData));
      return;
    }

    alert('Invalid Credentials');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#1C1C1C]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <>
      {!loggedInUser && <Login handleLogin={handleLogin} />}
      {loggedInUser?.role === 'admin' && (
        <AdminDashboard changeUser={setLoggedInUser} user={loggedInUser} />
      )}
      {loggedInUser?.role === 'employee' && (
        <EmployeeDashboard changeUser={setLoggedInUser} data={loggedInUser.data} />
      )}
    </>
  );
};

export default App;
