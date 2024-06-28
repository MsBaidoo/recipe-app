
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Recipes from "./pages/Recipes"
import Welcome from "./pages/welcome"
import Categories from "./pages/categories"

const router = createBrowserRouter([
  {path: "/", element: <Welcome/>},
  {path: '/recipes', element: <Recipes/>},
  {path: '/categories', element: <Categories/>}
])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
