import { useEffect,useState } from "react"
import {useProducts} from "../hooks/useProducts.js"
import {Link, useNavigate} from "react-router"


const ShowFull = () => {
    const navigate = useNavigate();
    const { handleGetAllProducts, handleGetSingleProduct, handleGetSearchSortProducts, handleGetProductsPagination } = useProducts()
    const [data, setData] = useState([])
    useEffect(()=>{
    async function fetchData() {
      const data = await handleGetAllProducts()
      setData(data)
    //   console.log(data)
    }
    fetchData()

  },[])
    return (
        <div>
            <table style={{ border: "1.6px solid black" }}>
                <thead style={{ border: "1.6px solid black" }}>
                    <tr style={{ border: "1.6px solid black" }}>
                        <th style={{ border: "1.6px solid black", borderCollapse: "collapse" }}>Name</th>
                        <th style={{ border: "1.6px solid black" }}>Price</th>
                        <th style={{ border: "1.6px solid black" }}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <button onClick={() => navigate(`/${item.id}`)}>View</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowFull