import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "./routes/Root/Root"
import { Todo } from "./routes/Todo/Todo"
import { Register } from "./routes/Register/Register"
import { Login } from "./routes/Login/Login"

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>ERROR</h1>,
    children: [
      {
        index: true,
        element: <Todo />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
