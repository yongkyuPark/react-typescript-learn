import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Home from './pages/Home';
import Event from './pages/Event';
import Login from './pages/Login';
import { AuthProvider,useAuth  } from "./context/authContext";
import AuthPage from './pages/AuthPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/event", element: <AuthPage><Event /></AuthPage> },
            { path: "/login", element: <Login/> },
        ]
    },
])


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
