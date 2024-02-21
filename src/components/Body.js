import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([

        {
            path:"/",
            element: <Login/>
        
        },

        {
            path:"/browse",
            element: <Browse/>
        },

        {
            path:"/signUp",
            element: <Login/>
        }
        

    ])
  return (
    <div>
        <RouterProvider router={appRouter}>

        </RouterProvider>
    </div>
  )
}

export default Body