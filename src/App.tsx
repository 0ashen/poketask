import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {HomePage, Pokemon} from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/pokemon/:name",
        element: <Pokemon/>,
    },
]);

const App = () => {
    return <RouterProvider router={router} />
};

export default App;
