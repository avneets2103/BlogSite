import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from '../Redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Error from './Error.jsx'
import App from './App.jsx'
import { CreatePost , AllPosts, PostView, YourAllPosts, PlsLogin} from './Components/ComponentIndex.js'
import {LoginPage, SignUpPage} from './Pages/PagesIndex.js'

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <PlsLogin/>,
      },
      {
        path: "/Login",
        element: <LoginPage/>,
      },
      {
        path: "/SignUp",
        element: <SignUpPage/>,
      },
      {
        path: "/CreatePost",
        element: <CreatePost/>
      },
      {
        path: "/Home",
        element: <AllPosts/>
      },
      {
        path: "/PostView/:documentId",
        element: <PostView/>
      }, 
      {
        path: "/YourPosts",
        element: <YourAllPosts/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>,
)
