import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import Swal from "sweetalert2"

const Home = () => {
    const [data, setData] = useState([])
    const [image, setImage] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((reponse) => {
                setTimeout(() => {
                    // console.log(reponse.data)

                }, [1000])
                setData(reponse.data)
                console.log(reponse.data)
            })
            .catch((err) => {
                console.log("something is error", err)
            })

    }, [])

    const deleteAllProducts = async () => {
        const result = await Swal.fire({
            title: "Delete All Products?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete All",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                await axios.delete("http://localhost:5000/products");
                setData([]);

                Swal.fire({
                    title: "Deleted!",
                    text: "All products have been deleted successfully.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            } catch (err) {
                console.error(err);

                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete products.",
                    icon: "error",
                });
            }
        }
    };


    return (
        <>
            <div>
                <button><Link to={`/createUpdateDelete`} style={{ textDecoration: "none" }}>Add product</Link></button>
                <button><Link to={`/createUpdateDelete`} style={{ textDecoration: "none" }}>Put product</Link></button>
            </div>
            <div>
                <button onClick={deleteAllProducts}>Delete All</button>
            </div>
            <div>
                {data.map((val) => (
                    <ul key={val.id}>
                        <li>{val.category}</li>
                        <li>{val.name}</li>
                        <li>{val.price}</li>
                        <li> {val.image}</li>
                        <Link to={`/${val.id}`}>click to check</Link>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Home