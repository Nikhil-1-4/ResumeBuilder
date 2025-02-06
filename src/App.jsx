import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'

import { TemplateSelectionProvider } from './context/TemplateInfoContext'

function App() {
  
  // const {user, isLoaded, isSignedIn}=useUser();
  // if(!isSignedIn&&isLoaded){
  //   return <Navigate to= {'/auth/sign-in'} />
  // }

  return (
    <>
      <TemplateSelectionProvider> {/* Wrap the entire app with the TemplateInfoProvider */}
      <Header />
      <Outlet /> {/* Outlet renders the nested routes */}
      </TemplateSelectionProvider>
    </>
  )
}

export default App












