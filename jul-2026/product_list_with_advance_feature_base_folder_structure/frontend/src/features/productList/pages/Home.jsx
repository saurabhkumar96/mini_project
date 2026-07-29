import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"


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
        <>
            <div>
              <button><Link to={`/createUpdateDelete`} style={{textDecoration:"none"}}>Add product</Link></button>
              <button><Link to={`/createUpdateDelete`} style={{textDecoration:"none"}}>Put product</Link></button>
            </div>
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
        </>
    )
}

export default Home