import  { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'

const ShowWithPagination = () => {
    const {handleGetProductsPagination} = useProducts()
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    

    useEffect(()=>{
        async function fetchData() {
          console.log(length)
          const data = await handleGetProductsPagination(page,10)
          setData(data)
          console.log(data)
        }
        fetchData()
    },[page])
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={() => setPage(page - 1)}>back</button>
            <span>{page}</span>
            <button onClick={() => setPage(page + 1)}>forward</button>
    </div>
  )
}

export default ShowWithPagination