// import { data } from 'autoprefixer'
// import React, { useState } from 'react'

// const Header = (props) => {
//   // console.log(data)

//   // const [userName, setUserName] = useState('')
//   // if(!data){
//   //   setUserName('Admin')
//   // }else {
//   //   setUserName(data.firstname)
//   // }
//   const logOutUser =() => {
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
//   }

//   return (
//     <div  className='flex items-end justify-between'>
//         <h1 className='text-2xl '>
//             Hello! <br /> <span className='text-3xl font-semibold'>{/*data.firstname*/} Salaar 👋</span>
//         </h1>
//         <button onClick={logOutUser} className=' bg-emerald-800 text-lg font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
//     </div>
//   )
// }

// export default Header


import React from 'react';

const Header = ({ changeUser, user }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  const userName = user?.data?.firstname || 'Admin';

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>
        Hello! <br />
        <span className='text-3xl font-semibold'>{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-emerald-800 text-lg font-medium text-white px-5 py-2 rounded-md'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
