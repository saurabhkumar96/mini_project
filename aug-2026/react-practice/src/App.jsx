import React, { useContext } from 'react'
import {Gand} from './context/AndProvider'
import { useFetch } from './hooks/useFetch'
const App = () => {
  const {name,dialog,myImage} = useContext(Gand)
  
  const data = useFetch()
  
  return (
    <div>
      <div>{name}</div>
      <div>{dialog}</div>
      <div>
        <img src={myImage} alt="" width={"200px"} />
      </div>
    </div>
  )
}

export default App