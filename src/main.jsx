import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ContactUs from './Components/Contactus.jsx'
import Login from './Components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reservation from './Components/Reservation.jsx'
import Signup from './Components/Signup.jsx'
import OrderOnline from './Components/OnlineOrder.jsx'
import Cart from './Components/Cart.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import Address from './Components/Address.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/Aboutus",
        element:<About/>
      },
      {
        path:"/Contactus",
        element:<ContactUs/>
      },
      {
        path:"/Reservation",
        element:<Reservation/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      },
      {
        path:"/OrderOnline",
        element:<OrderOnline/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/Details",
        element:<Address/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    </Provider>
    
  </StrictMode>,
)
