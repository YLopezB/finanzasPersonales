import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import StandarLayoud from './layouts/StandardLayoud'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
    { path: '/',
      element: <StandarLayoud/>,
      children: [
        {
          path: "",
          element: <Dashboard/>
        },
        {
          path: "/Dashboard",
          element: <Dashboard/>
        }
      ]
    }
])

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
