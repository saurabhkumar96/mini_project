import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default Product;