import {  signUp } from "../api/product";
import {  router, useEffect } from "../lib"


const SignUp = () => {
    useEffect(()=>{
        const form = document.querySelector("#form");
        const email = document.querySelector("#email");
        const pass = document.querySelector("#pass");
       

        form.addEventListener("submit",function(e){
            e.preventDefault();
            if(email.value =="" || pass.value=="" ){
                const err = document.querySelector("#err")
                err.innerHTML = "Ban khong duoc bo trong"
            }else{
                const formData = {
                    email:email.value,
                    password:pass.value
                }
                alert("Ban da dk thanh cong")
                signUp(formData).then(()=>router.navigate(`/signin`))
            }
            
        })
    })
  return (
    `
            <form id="form">
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

export default SignUp