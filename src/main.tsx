import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Root } from './compontens/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage, { getUsersPosts } from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./tailwind.css"
import { UserPage } from './pages/UserPage/UserPage';
import { MantineProvider } from '@mantine/core';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
const router = createHashRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        errorElement: <ErrorPage />,
        children:[
          {
            index: true,
            element: <HomePage/>,
            loader: getUsersPosts,
          },
          {
            path: "bookmarks",
            element: <BookmarkPage/>,
          },
          {
            path: "users/:userId",
            children:[
              {
                index:true,
                element:<UserPage/>,
              },
            ]
          },]
      }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
