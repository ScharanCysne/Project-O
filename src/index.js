import "@fontsource/roboto/100.css";
import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Management from './pages/management';
import NewGroup from './pages/newGroup';
import CurrentGroup from "./pages/currentGroup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Management/>,
    },
    {
        path: "new",
        element: <NewGroup/>,
    },
    {
        path: "current",
        element: <CurrentGroup/>,
    },
]);

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<RouterProvider router={router} />);
