import { deleteProduct, getProducts } from "../api/product";
import { useEffect, useState } from "../lib"


const product = () => {
    const[product,setProduct] = useState([]);
    useEffect(()=>{
        getProducts().then(({data})=>setProduct(data));
    },[]);
    useEffect(()=>{
        const btns = document.querySelectorAll(".btn-delete");
        for(let btn of btns){
            btn.addEventListener("click",function(){
                const id = btn.dataset.id;
                if(confirm("Banj cos muon xoa khong")){
                    deleteProduct(id).then(()=>{
                        const newProduct = product.filter((product)=>product.id != id);
                        setProduct(newProduct);
                        alert("ban da xoa thanh cong")
                })

                }
            })
        }
    })
  return (
    `
        <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">IMG</th>
            <th scope="col">GIAS</th>
            <th scope="col">Soluong</th>
            <th scope="col">Mota</th>
            <th scope="col"><a class="btn btn-info" href="/add">Theem</a>
            <a class="btn btn-info" href="/signin">Dang NHAP</a><a class="btn btn-info" href="/signup">Dang KY</a></th>
        </tr>
        </thead>
        <tbody>
        ${
            product.map((product)=>{
                return`<tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.image}</td>
                <td>${product.price}</td>
                <td>${product.quality}</td>
                <td>${product.description}</td>
                <td>
                <a class="btn btn-danger" href="/${product.id}/edit">Sua</a>
                <button class="btn btn-danger btn-delete" data-id="${product.id}">DeLETE</button>
                </td>
            </tr>`
            }).join("")
        }
        
        </tbody>
    </table>
    `
  )
}

export default product