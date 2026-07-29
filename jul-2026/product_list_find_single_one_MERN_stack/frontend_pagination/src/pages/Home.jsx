import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const limit = 5;
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("name");
    const [order, setOrder] = useState("asc")
    const [products, setProducts] = useState([]);

    // writing the function for fetch products
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/search-sort/", {
                params: {
                    search: search,
                    sort: sort,
                    order: order
                }
            })

            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }


    useEffect(() => {
        axios.get("http://localhost:5000/products/pagination", {
            params: {
                page: page, 
                limit: limit
            }
        })
            .then((reponse) => {
                setData(reponse.data)
                console.log(reponse.data)
            })
            .catch((err) => {
                console.log("something is error", err)
            })



    }, [page])
    return (
        <div>
            {/* input field */}
            <input type="text" placeholder="Search Product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >

                <option value="name">Name</option>

                <option value="price">Price</option>

            </select>
            <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >

                <option value="asc">Ascending</option>

                <option value="desc">Descending</option>

            </select>

            <button onClick={fetchProducts}>click</button>

            {/* end of input field */}


            <div syle={{ marginTop: "20px" }}>
                {/* button for the setPage */}
                <button
                    onClick={() => (setPage(page - 1))}
                    disabled={page === 1}
                >previous</button>

                <span> Page {page} </span>

                <button
                    onClick={() => { setPage(page + 1) }}
                >next</button>
            </div>


            <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>

                <div>
                    {data.map((val) => (
                        <ul key={val.id}>
                            <li>{val.category}</li>
                            <li>{val.name}</li>
                            <li>{val.price}</li>
                            <Link to={`/${val.id}`}>click to check</Link>
                        </ul>
                    ))}
                </div>

                <div>
                    {products.map((val) => (
                        <ul key={val.id}>
                            <li>{val.category}</li>
                            <li>{val.name}</li>
                            <li>{val.price}</li>
                            <Link to={`/${val.id}`}>click to check</Link>
                        </ul>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Home