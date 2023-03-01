import axios from "axios";
const instance = axios.create({
    baseURL :"http://localhost:3000",
});
const getProducts = ()=>{
    return instance.get(`/products`);
}
const getProduct = (id)=>{
    return instance.get(`/products/${id}`);
}
const addProduct = (product)=>{
    return instance.post(`/products`,product);
}
const editProduct = (product)=>{
    return instance.put(`/products/${product.id}`,product);
}
const deleteProduct = (id)=>{
    return instance.delete(`/products/${id}`);
}
const signIn = (user)=>{
    return instance.post(`/users`,user);
}
const signUp = (user)=>{
    return instance.post(`/users`,user);
}
export {signIn,signUp,getProducts,getProduct,addProduct,editProduct,deleteProduct}