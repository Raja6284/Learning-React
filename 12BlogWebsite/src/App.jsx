import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
    console.log(`hii there`);
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App


// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import './App.css';
// import authService from "./appwrite/auth";
// import { login, logout } from "./store/authSlice";
// import { Footer, Header } from './components';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [isUserCheckEnabled, setIsUserCheckEnabled] = useState(false); // Control user check
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Only call getCurrentUser if user check is enabled
//     if (isUserCheckEnabled) {
//       authService.getCurrentUser()
//         .then((userData) => {
//           if (userData) {
//             dispatch(login({ userData }));
//           } else {
//             dispatch(logout());
//           }
//         })
//         .finally(() => setLoading(false));
//     } else {
//       setLoading(false); // If no user check is required, stop loading
//     }
//   }, [isUserCheckEnabled, dispatch]);

//   // Example function to trigger the user check (could be from user interaction, route, etc.)
//   const handleCheckUser = () => {
//     setLoading(true); // Show loader while checking user
//     setIsUserCheckEnabled(true); // Enable user check
//   };

//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <button onClick={handleCheckUser}>Check User</button> {/* Example trigger */}
//         <main>
//           TODO:  <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null;
// }

// export default App;
