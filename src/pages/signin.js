import {  signIn } from "../api/product";
import {  useEffect } from "../lib"


const SignIn = () => {
    useEffect(()=>{
        const form = document.querySelector("#form");
        const email = document.querySelector("#email");
        const pass = document.querySelector("#pass");
        if(form){

        form.addEventListener("submit",async(e)=>{
            e.preventDefault();
            if(email.value =="" || pass.value=="" ){
                const err = document.querySelector("#err")
                err.innerHTML = "Ban khong duoc bo trong"
            }else{
                const formData = {
                    email:email.value,
                    password:pass.value
                }


                const {data} = await signIn(formData);
                

                localStorage.setItem("user",JSON.stringify(data,user));
                console.log(data.user);
                alert("Ban da dang nhap thanh cong");
                document.location.href = "/"
                
            }
            
        })
    }
    })
  return (
    `
            <form id="form">
            <h1>Dang Nhap</h1>
        <div class="mb-3">
            <label class="form-label">email</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label class="form-label">pass</label>
            <input type="password" class="form-control" id="pass">
        </div>
        <span id="err"></span>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
  )
}

export default SignIn