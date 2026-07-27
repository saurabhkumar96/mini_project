import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import { ThemeContext, UserContext } from './features/auth/auth.context.jsx'
import { useState } from 'react'



const App = () => {
  const [theme, setTheme] = useState('light')
  const myname = "Rahul"
  const user = {name: "john", age: 25}
  return (
    <>
      <UserContext.Provider value= {user}>
      <ThemeContext.Provider value={{ theme, setTheme, myname }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App