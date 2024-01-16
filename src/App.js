import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home/Home'
import Quote from './Component/Quote/Quote'
import Resturant from './Component/Resturant/Resturant'
import Foods from './Component/Foods/Foods'
import Contact from './Component/Contact/Contact'




const App = () => {

  const routes = createBrowserRouter ([
    {
      path : '/',
      element : <Layout />,
      errorElement : <h1>Error 404</h1>,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/Quote',
          element : <Quote />
        },
        {
          path : '/Resturant',
          element : <Resturant />
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
