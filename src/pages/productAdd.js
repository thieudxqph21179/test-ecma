import { addProduct } from "../api/product";
import {  router, useEffect } from "../lib"


const productAdd = () => {
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
                    name :name.value,
                    image :image.value,
                    price :price.value,
                    quality :quality.value,
                    description :description.value
                }
                alert("Ban da them thanh cong")
                addProduct(formData).then(()=>router.navigate(`/`))
            }
            
        })
    })
  return (
    `
            <form id="form">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
            <label class="form-label">IMG</label>
            <input type="text" class="form-control" id="image">
        </div>
        <div class="mb-3">
            <label class="form-label">price</label>
            <input type="number" class="form-control" id="price">
        </div>
        <div class="mb-3">
            <label class="form-label">quality</label>
            <input type="number" class="form-control" id="quality">
        </div>
        <div class="mb-3">
            <label class="form-label">description</label>
            <input type="text" class="form-control" id="description">
        </div>
        <span id="err"></span>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
  )
}

export default productAdd