import {getAllProducts, getProductsPagination,getSearchSortProducts,getSingleProduct} from "../services/product.api.js"

export const useProducts = () => {

    const handleGetAllProducts = async () =>{
        const data = await getAllProducts()
        return data
    };

    const handleGetSingleProduct = async (id) => {
        const data = await getSingleProduct(id)
        return data
    };

    const handleGetSearchSortProducts = async () => {
        const data = await getSearchSortProducts()
        return data
    };

    const handleGetProductsPagination = async (page,limit) => {
        const data = await getProductsPagination(page,limit)
        return data
    };

    return {handleGetAllProducts,handleGetSingleProduct,handleGetSearchSortProducts,handleGetProductsPagination};
};