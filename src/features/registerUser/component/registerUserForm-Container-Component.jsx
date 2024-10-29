import { useContext, useState } from "react";
import {
  getBase64String,
  registerUser,
  verifyEmail
} from "../service/registerUserService";
import PopUpScreen, {
  closePopUpScreen,
  openPopUpScreen
} from "../../../utils/popUpScreen/popUpScreenComponent";

import errorImage from "../../../assets/erroeImage.jpg";

import currencyList from "../../../utils/currencyList.json";

import countryList from "../../../utils/countryList.json";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const RegisterUserForm = () => {
  const { loginDispatcher } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    profilePicture: "",
    password: "",
    confirmPassword: "",
    currency: "",
    country: ""
  });
  const [formValidationResponse, setFormValidationResponse] = useState("");
  const [showOtpScreen, setShowOtpSceen] = useState(false);
  const [otpCode, setOtpCode] = useState(null);
  const [load, setLoading] = useState(false);

  return (
    <div className=" w-full mx-auto  md:ms-10  flex flex-col justify-center place-items-center md:block    md:w-1/2 xl:pe-12 text-white ps-10 pe-10 overflow-y-auto min-h-[100vh]">
      <div>
        <p>Create An Account</p>
        <p>Register with your email</p>
      </div>

      {/*form container*/}
      <div
        className={` ${showOtpScreen
          ? "hidden"
          : "flex"} flex-col place-items-center   place-content-center`}
      >
        {/*FirstName Container*/}
        <div className="mt-8">
          <p>FirstName</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, firstName: e.target.value };
              });
            }}
          />
        </div>

        {/*LastName Container*/}
        <div className="mt-2">
          <p>LastName</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="text"
            name="lastName"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, lastName: e.target.value };
              });
            }}
          />
        </div>

        {/*Phone number Container*/}
        <div className="mt-2">
          <p>Phone Number</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="tel"
            name="phoneNumber"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, phoneNumber: e.target.value };
              });
            }}
          />
        </div>

        {/*Email Container*/}
        <div className="mt-2">
          <p>Email</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="email"
            required
            name="email"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, email: e.target.value };
              });
            }}
          />
        </div>

        {/*Profile Container*/}
        <div className="mt-2">
          <p>Profile Picture</p>
          <input
            className="w-80 bg-white xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="file"
            required
            name="profilePicture"
            accept="image/"
            onChange={e => {
              getBase64String(e.target.files[0])
                .then(result => {
                  setFormData(prevState => {
                    return {
                      ...prevState,
                      profilePicture: result.split(",")[1]
                    };
                  });
                })
                .catch(err => {
                  setFormValidationResponse(err.message);
                });
            }}
          />
        </div>

        {/*Password Container*/}
        <div className="mt-2">
          <p>Password</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-3"
            type="password"
            name="password"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, password: e.target.value };
              });
            }}
          />
        </div>

        {/*`Confirm Password Container*/}
        <div className="mt-2">
          <p>Confirm Password</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-3"
            type="password"
            name="confirm password"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, confirmPassword: e.target.value };
              });
            }}
          />
        </div>

        {/*Country Container*/}
        <div className="mt-2">
          <p>Country</p>
          <select
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="password"
            onChange={e => {
              setFormData(prevState => {
                return { ...prevState, country: e.target.value };
              });
            }}
          >
            <option>default</option>
            {countryList.countries.map((country, index) =>
              <option key={index}>
                {country}{" "}
              </option>
            )}
            <option>Nigeria</option>
          </select>
        </div>

        {/*Currency Container*/}
        <div className="mt-2">
          <p>Currency</p>
          <select
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            onChange={e => {
              setFormData(prevState => {
                return {
                  ...prevState,
                  currency: e.target.value.split("(")[1].replace(")", "")
                };
              });
            }}
          >
            <option>default</option>
            {currencyList.currencies.map((result, index) =>
              <option key={index}>
                <div className="">
                  <p>
                    <span>{result.name}</span> ({result.currency})
                  </p>
                </div>
              </option>
            )}
          </select>
        </div>

        <div className="md:w-1/2 ">
          {/*Sign Up button*/}
          <div
            className="mx-auto mt-8 w-fit bg-yellow-600 p-2 rounded-xl text-center "
            onClick={() => {
              if (!formData.firstName) {
                setFormValidationResponse("firstName required.");
                openPopUpScreen();
                return;
              }

              if (!formData.lastName) {
                setFormValidationResponse("lastName required");
                openPopUpScreen();
                return;
              }

              if (!formData.phoneNumber) {
                setFormValidationResponse("phoneNumber required");
                openPopUpScreen();
                return;
              }

              if (!formData.email) {
                setFormValidationResponse("email is required");
                openPopUpScreen();
                return;
              }

              if (!formData.profilePicture) {
                setFormValidationResponse("profilePicture is required.");
                openPopUpScreen();
                return;
              }

              if (!formData.password) {
                setFormValidationResponse("password is required.");
                openPopUpScreen();
                return;
              }

              if (!formData.confirmPassword) {
                setFormValidationResponse("confirm Password is required");
                openPopUpScreen();
                return;
              }

              if (!formData.country) {
                setFormValidationResponse("country is required");
                openPopUpScreen();
                return;
              }

              if (!formData.currency) {
                setFormValidationResponse("currency is required");
                openPopUpScreen();
                return;
              }

              if (
                (/^\+$/.test(
                  formData.phoneNumber
                )  )
              ) {
               
                setFormValidationResponse("Invalid phone number");
                openPopUpScreen();
                return;
              }

              if(formData.phoneNumber.length !== 14){
                alert(formData.phoneNumber.length)
                setFormValidationResponse("Invalid phone number");
                openPopUpScreen();
                return;
              }

              if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  formData.email
                )
              ) {
                setFormValidationResponse("Invalid email provided");
                openPopUpScreen();
                return;
              }

              if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%?&]{8,}$/.test(
                  formData.password
                )
              ) {
                setFormValidationResponse(
                  "Invalid password password provided. Password must contain minimum length of 8 characters with atleast one uppercase, one lowercase, one digit and one special character."
                );
                openPopUpScreen();
                return;
              }

              if (formData.confirmPassword !== formData.password) {
                setFormValidationResponse("Password does not match.");
                openPopUpScreen();
                return;
              }

              if (formData.country === "default") {
                setFormValidationResponse("Please select country.");
                openPopUpScreen();
                return;
              }

              if (formData.currency === "default") {
                setFormValidationResponse("Please select currency.");
                openPopUpScreen();
                return;
              }

              setFormValidationResponse("");
              // eslint-disable-next-line no-unused-vars
              const { confirmPassword, ...dataToSend } = formData;

              registerUser(dataToSend)
                .then(res => {
                  return res.json();
                })
                .then(result => {
                  if (result.status === 200) {
                    closePopUpScreen();
                    setShowOtpSceen(true);
                    return;
                  }

                  setFormValidationResponse(result.message);
                })
                .catch(err => setFormValidationResponse(err.message));
            }}
          >
            <p>
              <a
                onClick={() => {
                  openPopUpScreen();
                }}
              >
                Sign Up
              </a>
            </p>
          </div>

          <div className="mt-8 w-full text-center mb-5">
            <p>
              Already have an account?{"    "}
              <span className="text-yellow-500 ">
                <a  className="underline cursor-default hover:text-blue-600" onClick={()=>{
                  navigate('/loginUser')
                }}>Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-full ${showOtpScreen
          ? "flex"
          : "hidden"} h-screen  flex-col justify-center place-items-center`}
      >
        <p>Enter OTP To Verify Email</p>
        <div className="mt-8">
          <p>OTP</p>
          <input
            className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0"
            type="text"
            name="otp"
            value={otpCode}
            onChange={e => {
              setOtpCode(e.target.value);
            }}
          />
        </div>
        <p
          className="mx-auto mb-5  mt-8 w-1/2 bg-yellow-600 p-2 rounded-xl text-center hover:shadow-gray-600 hover:shadow-lg  "
          onClick={() => {
            if (!otpCode || String(otpCode).length !== 4) {
              setFormValidationResponse(
                "Opt code not provided or Otp less or greater than 4 digits."
              );
              openPopUpScreen();
              return;
            }
            setLoading(true);
            verifyEmail({
              email: formData.email,
              otp: otpCode
            })
              .then(res => {
                return res.json();
              })
              .then(result => {
                if (result.status === 200) {
                  loginDispatcher({
                    type: "ADD_USER_DETAILS",
                    payload: { user: result.user }
                  });
                  navigate("/user/dashboard");
                  return;
                }
                setLoading(false);
                setFormValidationResponse(result.message);
                setOtpCode(null);

                openPopUpScreen();
              });
          }}
        >
          Verify
        </p>

        {load &&
          <CircularProgress
            sx={{
              color: "green"
            }}
            size={50}
          />}
      </div>

      <PopUpScreen>
        <div
          className={`animate-popUpAnimation  w-full flex flex-col place-items-center  min-h-fit`}
        >
          <p className="w-full text-center m-5 text-2xl p-5 ">
            {formValidationResponse
              ? "Registration Message"
              : "Please hold on while we set up account"}
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
    </div>
  );
};

export default RegisterUserForm;
