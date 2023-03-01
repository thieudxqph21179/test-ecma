import 'bootstrap/dist/css/bootstrap.min.css'

import { render, router } from './lib';
import product from './pages/product';
import productAdd from './pages/productAdd';
import productEdit from './pages/productEdit';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

const app = document.querySelector("#app");

router.on("/",()=> render(product,app))
router.on("/add",()=> render(productAdd,app))
router.on("/:id/edit",({data})=> render(() =>productEdit(data),app))

router.on("/signin",()=>render(SignIn,app))
router.on("/signup",()=>render(SignUp,app))
router.resolve();
