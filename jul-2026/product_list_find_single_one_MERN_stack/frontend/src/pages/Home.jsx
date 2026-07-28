import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((reponse) => {
                setTimeout(()=>{
                    // console.log(reponse.data)
                    
                },[1000])
                setData(reponse.data)
                console.log(reponse.data)
            })
            .catch((err) => {
                console.log("something is error", err)
            })

    }, [])
    return (
        <div>
            {/* {data[0]?.name} */}
            {/* {data.length > 0 ? data[0].name : "Loading..."} */}

            <div>
                {data.map((val)=>(
                    <ul key={val.id}>
                        <li>{val.category}</li>
                        <li>{val.name}</li>
                        <li>{val.price}</li>
                        <Link to={`/${val.id}`}>click to check</Link>
                    </ul>
                ))} 
            </div>
        </div>
    )
}

export default Home