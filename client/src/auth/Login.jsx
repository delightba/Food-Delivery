// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-500 transition"
//         >
//           Login
//         </button>
//         <p className="text-sm text-center mt-4">
//           Don't have an account?{' '}
//           <a href="/register" className="text-red-500 hover:underline">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React from 'react'
import Logo from '../assets/food-logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='h-screen pt-[20vh] bg-red-200'>
      <form className='ease-in duration-300 w-[80%] mx-auto shadow-lg backdrop-blur-md bg-white/80 lg:w-[50%] items-center rounded-md px-10 py-8'>
      <navLink>
        <img src={Logo} alt="logo" className='w-48 h-40 logo cursor-pointer items-center flex mx-auto' />
      </navLink>
      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email" name="email" className='grow' placeholder="Email" />
</label>
<label className="input input-bordered flex items-center my-5 gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder='**********' />
  </label>
  <button className='bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded px-8 py-2 text-xl font-medium text-white block mx-auto w-[100%] my-5' type='submit'>
    Sign in
  </button>
  <Link to={'/register'} className='font-semibold text-center py-4 block mx-auto'> Dont have account <span className='text-[fdc55e] underline'>Register</span>
  </Link>

      </form>
    </div>
  )
}

export default Login
