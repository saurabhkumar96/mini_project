import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const Product = () => {
    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("err",err)
        })
    },[id])


  return (
    <>
    <div>
        <Link to="/">Go to Home</Link>
    </div>
    <div>

            <h1>{data?.name}</h1>

            <h3>₹ {data?.price}</h3>

            <p>{data?.category}</p>

        </div>
    </>
  )
}

export default Product