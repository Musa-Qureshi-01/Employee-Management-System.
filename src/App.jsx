import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStoarge, setLocalStoarge } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { use } from 'react'



const App = () => {


  

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  console.log('User is LoggedIn ')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser) 
    setUser(loggedInUser.role)
    setLocalStoarge(userData.data)
    // console.log(userData)
  }

}, [])


  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  // console.log(authData.employees)
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      // console.log("This is Admin");
      setUser('admin')
      // console.log(user)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    } else if (userData){
      // console.log("This is Employee");
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employee}));
      }
      // setUser('employee')
      // console.log(user)

    }
    else {
      alert("Invalid Credentials")
    }
  }

  // const data = useContext(AuthContext)
  // console.log(data)
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} /> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App