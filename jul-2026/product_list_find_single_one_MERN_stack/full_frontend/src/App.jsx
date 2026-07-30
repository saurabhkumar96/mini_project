import {RouterProvider} from "react-router"
import { router } from './api.routes'


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App