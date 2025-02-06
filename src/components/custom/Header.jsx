// import React from 'react'
// import { Button } from '../ui/button'
// import { Link } from 'react-router-dom'
// import { UserButton, useUser } from '@clerk/clerk-react'
// function Header() {
//     const {user, isSignedIn}=useUser();

//   return (
//     <div className='p-3 px-5 flex justify-between'>
//         <img src='/logo.svg' width={100} height={100} />
//         {
//            isSignedIn ? 
//             <div className='flex gap-2 items-center'>
//                 <Link to={'/dashboard'}>
//                 <Button>Dashboard</Button>
//                 </Link>
//                 <UserButton/>
//             </div>:
//         <Link to={'/auth/sign-in'}>
//         {/* </Link><Link to={'/dashboard'}> */}
//         <Button>Get Started</Button>
//         </Link>
//         }
//     </div>
//   )
// }

// export default Header


import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="p-4 px-6 flex justify-between items-center bg-white shadow-md border-b-4 border-blue-500  top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link to="/">
        <img src="/1702966613724.jpeg" alt="Logo" className="w-24 h-auto" />
      </Link>

      {/* Navigation */}
      <nav>
        {isSignedIn ? (
          <div className="flex gap-4 items-center">
            <Link to="/dashboard">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-all">
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-all">
              Get Started
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
