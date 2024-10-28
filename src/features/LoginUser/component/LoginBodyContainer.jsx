import React, { useContext, useState } from "react";
import PopUpScreen, {
  openPopUpScreen,
  closePopUpScreen
} from "../../../utils/popUpScreen/popUpScreenComponent";
import errorImage from "../../../assets/erroeImage.jpg";
import { CircularProgress } from "@mui/material";
import { AppContext } from "../../../context/AppContext";
import { loginUser } from "../service";
import { useNavigate } from "react-router-dom";

const LoginBodyContainer = () => {
    const navigate = useNavigate()
    const {loginDispatcher} = useContext(AppContext)
  const [loginForm,setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [formValidationResponse, setFormValidationResponse] = useState("");

  return (
    <React.Fragment>
      <div className="dark:text-white md:w-[50%] h-screen  flex flex-col place-items-center  pt-28">
        <p className="font-bold text-2xl ">Log in Account</p>
        <p className="mt-2">Welcome back, Log in with your email</p>

        <form>
          <div className="mt-8">
            <p>Email</p>
            <input
            name="email"
              type="email"
              className="outline-none w-[300px] p-3 rounded-2xl text-black "
              value={loginForm.email}
              onChange={(e)=>{
                setLoginForm({
                    ...loginForm,
                    email:e.target.value
                })
              }}
            />
          </div>

          <div className="mt-8">
            <p>Password</p>
            <input
            name="pasword"
              type="password"
              className="outline-none w-[300px] p-3 rounded-2xl text-black "
              value={loginForm.password}
              onChange={(e)=>{
                setLoginForm({
                    ...loginForm,
                    password:e.target.value
                })
              }}
            />
          </div>

          <div className="bg-[#EDD777] hover:bg-opacity-100   bg-opacity-90 w-[300px] p-4 rounded-2xl text-center mt-8" onClick={()=>{
                if (!loginForm.email) {
                    setFormValidationResponse("email is required");
                    openPopUpScreen();
                    return;
                  }
    
                  
    
                  if (!loginForm.password) {
                    setFormValidationResponse("password is required.");
                    openPopUpScreen();
                    return;
                  }



              if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  loginForm.email
                )
              ) {
                setFormValidationResponse("Invalid email provided");
                openPopUpScreen();
                return;
              }

              if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%?&]{8,}$/.test(
                  loginForm.password
                )
              ) {
                setFormValidationResponse(
                  "Invalid  password provided. Password must contain minimum length of 8 characters with atleast one uppercase, one lowercase, one digit and one special character."
                );
                openPopUpScreen();
                return;
              }
           setFormValidationResponse('')
           openPopUpScreen()

           loginUser(loginForm).then(res=>{
            return res.json()
           }).then(result=>{
              if(result.status === 200){
                 closePopUpScreen()
                 localStorage.setItem('token',result.user.token)
                 loginDispatcher({type:'ADD_USER_DETAILS',payload:{user:result.user}})
                 navigate('/user/dashboard')
                 
                 return
              }
              setFormValidationResponse(result.message)
              openPopUpScreen()
           })

          }}>
            <p>Login</p>
          </div>

          <div className="mt-10 flex flex-col  gap-3">
            <p className="text-sm">Forgot Password ?</p>

            <p className="text-sm">
              {"Don't have Account?    "}
              <span className="text-[#EDD777] hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </div>
        </form>
      </div>

      <PopUpScreen>
        <div
          className={`animate-popUpAnimation  w-full flex flex-col place-items-center `}
        >
          <p className="w-full text-center m-5 text-2xl p-5 ">
            {formValidationResponse
              ? "Login Message"
              : "Logging.....   you in please wait."}
          </p>
          <img
            src={errorImage}
            className={` ${formValidationResponse
              ? "block"
              : "hidden"} w-36 h-full `}
          />

          <p
            className="mt-6 text-red-800"
            onClick={() => {
              closePopUpScreen();
            }}
          >
            {formValidationResponse
              ? formValidationResponse
              : <CircularProgress
                  sx={{
                    color: "green"
                  }}
                  size={100}
                />}
          </p>

          <div
            className={`${formValidationResponse
              ? "flex"
              : "hidden"} mt-2  w-full  justify-end p-2`}
          >
            <p
              className="bg-orange-500 w-20 p-1 text-center rounded-md "
              onClick={() => {
                closePopUpScreen();
              }}
            >
              Ok
            </p>
          </div>
        </div>
      </PopUpScreen>
    </React.Fragment>
  );
};

export default LoginBodyContainer;
