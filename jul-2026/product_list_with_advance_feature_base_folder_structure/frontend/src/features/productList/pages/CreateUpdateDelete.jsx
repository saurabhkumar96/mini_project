import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const CreateUpdateDelete = () => {
    const navigate = useNavigate();

    async function addProduct(){
        await axios.post("http://localhost:5000/products/create",{
            name: "MacBook Pro",
            price: 150000,
            category: "Laptop"
        
        })
        navigate("/")
    }

  return (
    <div>
        <button onClick={addProduct}>add product</button>
    </div>
  )
}

export default CreateUpdateDelete