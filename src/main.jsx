import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store.js'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { AuthLayout, Input } from './components/index.js'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost";

import EditPost from "./pages/EditPost";
import Login from './pages/Login.jsx'

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import SignupPage from './pages/SignupPage.jsx'

const router = createBrowserRouter([
   {
    path : '/',
    element : <App/>,
    children:[
       {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login /> 
                    <h1> hi hhkkjljk </h1>
                    
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignupPage />
                   
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
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
