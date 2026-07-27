import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../auth.context'



const Home = () => {
    const user = useContext(UserContext)
    const data = useContext(ThemeContext)
    console.log(data.myname)
    console.log(user)
  return (
    <div>Home</div>
  )
}

export default Home