import { editProduct, getProduct } from "../api/product";
import { router, useEffect, useState } from "../lib";


const productEdit = ({id}) => {
    const[product,setProduct] = useState([]);
    useEffect(()=>{
        getProduct(id).then(({data})=>setProduct(data));
    },[])
    useEffect(()=>{
        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const image = document.querySelector("#image");
        const price = document.querySelector("#price");
        const quality = document.querySelector("#quality");
        const description = document.querySelector("#description");

        form.addEventListener("submit",function(e){
            e.preventDefault();
            if(name.value =="" || image.value=="" || price.value==""){
                const err = document.querySelector("#err")
                err.innerHTML = "Ban khong duoc bo trong"
            }else{
                const formData = {
                    id,
                    name :name.value,
                    image :image.value,
                    price :price.value,
                    quality :quality.value,
                    description :description.value
                }
                alert("ban da sua thanh cong")
                editProduct(formData).then(()=>router.navigate(`/`))
            }
            
        })
    })
  return (
    `
            <form id="form">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" value="${product.name}">
        </div>
        <div class="mb-3">
            <label class="form-label">IMG</label>
            <input type="text" class="form-control" id="image" value="${product.image}">
        </div>
        <div class="mb-3">
            <label class="form-label">price</label>
            <input type="number" class="form-control" id="price" value="${product.price}">
        </div>
        <div class="mb-3">
            <label class="form-label">quality</label>
            <input type="number" class="form-control" id="quality" value="${product.quality}">
        </div>
        <div class="mb-3">
            <label class="form-label">description</label>
            <input type="text" class="form-control" id="description" value="${product.description}">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
  )
}


export default productEdit