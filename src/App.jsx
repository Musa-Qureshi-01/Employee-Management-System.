import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
<<<<<<< Updated upstream
import { setLocalStoarge } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext); // destructure employee array only

  useEffect(() => {
    setLocalStoarge();

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      if (parsedUser.data) {
        setLoggedInUserData(parsedUser.data);
      }
    }
  }, [userData]); // wait for userData to be ready
  // ↑ This ensures that if login depends on userData, it's available.

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData && Array.isArray(userData)) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
=======
import { getLocalStoarge } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setLoggedInUser(parsedUser);
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
        <EmployeeDashboard changeUser={setLoggedInUser} user={loggedInUser} />
      )}
>>>>>>> Stashed changes
    </>
  );
};

export default App;
