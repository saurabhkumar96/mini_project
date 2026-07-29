import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"


const Product = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log("err", err)
            })
    }, [id])


    const updateProduct = async function () {
        await axios.put(
            `http://localhost:5000/products/${id}`,
            {
                name: "I am changed",
                price: 5789,
                category: "changed"
            }
        );

        navigate("/")
    }


    const deleteProduct = async function () {
        const response = await axios.delete(
            `http://localhost:5000/products/${id}`
        );
        const data = response.data;
        if(data.status === true) {
            alert(data.message)
            navigate("/")
        }
        
    }

    return (
        <>
            <div>
                <Link to="/">Go to Home</Link>
            </div>
            <div>
                <h1>{data?.name}</h1>
                <h3>₹ {data?.price}</h3>
                <p>{data?.category}</p>
                <div>
                    <button onClick={updateProduct}>update product</button>
                    <button onClick={deleteProduct}>delete product</button>
                </div>
            </div>
        </>
    )
}

export default Product