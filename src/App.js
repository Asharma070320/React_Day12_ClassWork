import React from 'react'
import './App.css'
import Layout from './Component/Layout'
import Home from './Component/Home'
import Quote from './Component/Quote'
import Resturants from './Component/Resturants'
import Contact from './Component/Contact'
import Foods from './Component/Foods'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const App = () => {

  const routes = createBrowserRouter([
    {
      path : '/',
      element: <Layout />,
      errorElement : <h1>404 Error Found</h1>,
      children: [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/Quote',
          element : <Quote />
        },
        {
          path : '/Resturants',
          element : <Resturants />
        },
        {
          path : '/Foods',
          element : <Foods />
        },
        {
          path : '/Contact',
          element : <Contact />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
