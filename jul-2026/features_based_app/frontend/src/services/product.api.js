import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
        "withCredentials": true
    }
})

// app.use("/products", require("./routes/productRoute"))
        // router.get("/", productController.getAllproducts);
        // router.get("/pagination", productController.getAllproductsforPagination);
        // router.get("/:id", productController.getSingleProduct);
// app.use("/search-sort", require("./routes/searchSortProductRoute"))
        // router.get("/", searchSortController.getProducts);
        // router.post("/create", validateProduct,upload.single("image"),productController.createProduct)
        // router.put("/:id",validateProduct, productController.updateProduct)
        // router.delete("/:id", productController.deleteProduct)
        // router.delete("/", productController.deleteAllProducts)


// Get all products
export async function getAllProducts() {
  const res = await api.get("/products");
  return res.data;
}

// Get paginated products
export async function getProductsPagination(page=1, limit=10) {
  const res = await api.get("/products/pagination",{params:{page, limit}});
  return res.data;
}

// Get a single product by ID
export async function getSingleProduct(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

// Search and sort products
export async function getSearchSortProducts() {
  const res = await api.get("/search-sort");
  return res.data;
}

export async function deleteAllProducts() {
  const res = await api.delete("/products");
  return res.data;
}

export async function deleteProduct(id) {
  const res = await api.delete(`/products/${id}`);
  return res.data;
}

export async function updateProduct(id, data) {
  const res = await api.put(`/products/${id}`, data);
  return res.data;
}

export async function createProduct(data) {
  const res = await api.post("/products", data);
  return res.data;
}

