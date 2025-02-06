// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import SignInPage from './auth/sign-in'
// import Home from './home'
// import Dashboard from './dashboard'
// import { ClerkProvider } from '@clerk/clerk-react'
// import EditResume from './dashboard/resume/[resumeId]/edit'
// import View from './my-resume/[resumId]/View'
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// const router = createBrowserRouter([
//   {
//     // path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'/dashboard',
//         element:<Dashboard/>
//       },
//       {
//         path:'/dashboard/resume/:resumeId/edit',
//         element:<EditResume/>
//       }
//   ]
//   },
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/auth/sign-in',
//     element:<SignInPage/>
//   },
//   {
//     path:'/my-resume/:resumeId/View',
//     element:<View/>
//   },
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//     <RouterProvider router={router}/>
//     </ClerkProvider>
    
//   </StrictMode>
// )



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './auth/sign-in';
import Home from './home';
import Dashboard from './dashboard';
import { ClerkProvider } from '@clerk/clerk-react';
import EditResume from './dashboard/resume/[resumeId]/edit';
import View from './my-resume/[resumId]/View';

// Import New Pages
import TemplateSelection from './pages/TemplateSelection';
import CVDetails from './pages/CVdetails';
import JDdetails from './pages/JDdetails';
import UserNotes from './pages/UserNotes';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/my-resume/:resumeId/view',
    element: <View />,
  },
  {
    path: '/select-template/:resumeId', 
    element: <TemplateSelection />,
  },
  {
    path: '/cv-details/:resumeId', 
    element: <CVDetails />,
  },
  {
    path: '/jd-details/:resumeId', 
    element: <JDdetails />,
  },
  {
    path: '/user-notes/:resumeId', 
    element: <UserNotes />,
  },
  {
    path: '/edit-resume', 
    element: <EditResume />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
