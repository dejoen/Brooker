 import RegisterUserForm from "./registerUserForm-Container-Component"
import HomeSectionContainer from "../../home/component/home-body-side-containter"
 
let  RegisterUserContainer = () =>{

    return(
        <div className="md:flex place-items-center justify-items-center">
    <RegisterUserForm/>
    <HomeSectionContainer/>
        </div>
    )
}

export default RegisterUserContainer