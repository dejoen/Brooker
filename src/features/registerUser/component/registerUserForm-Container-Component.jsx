
const RegisterUserForm = () => {

    return (
      <div className="mx-auto md:w-1/2 xl:pe-12 text-white ps-10 pe-10 overflow-y-auto">
       <div>
       <p>Create An Account</p>
       <p>Register with your email</p>
       </div>

        {/*form container*/ }
       <div className=" flex flex-col place-items-center   place-content-center">

    {/*FirstName Container*/ }
    <div className="mt-8">
         <p>FirstName</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="text"   />
         </div>

          {/*LastName Container*/ }
    <div className="mt-2">
         <p>LastName</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="text"   />
         </div>

               {/*Phone number Container*/ }
 <div className="mt-2">
         <p>Phone Number</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="tel"   />
         </div>

        {/*Email Container*/ }
         <div className="mt-2">
         <p>Email</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="email"  required />
         </div>

      {/*Profile Container*/ }
      <div className="mt-2">
         <p>Profile Picture</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="file"  required />
         </div>

          {/*Password Container*/ }
 <div className="mt-2">
         <p>Password</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-3" type="password"   />
         </div>


{/*`Confirm Password Container*/ }
 <div className="mt-2">
         <p>Confirm Password</p>
         <input className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-3" type="password"   />
         </div>

          {/*Country Container*/ }
 <div className="mt-2">
         <p>Country</p>
         <select className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" type="password"
   >
    <option>default</option>
    <option>Nigeria</option>
   </select>
         </div>

   {/*Country Container*/ }
   <div className="mt-2">
         <p>Currency</p>
         <select className="w-80 xl:w-80  outline-none text-black p-2 rounded-md mb-0" 
   >
    <option>default</option>
    <option>$</option>
   </select>
         </div>


           {/*Password Container*/ }
 <div className="mx-auto mt-5 w-80 bg-yellow-600 p-2 rounded-xl text-center">
        <p><a href="#">Sign Up</a></p>
         </div>

   

       </div>
         
      <div className="mt-8 w-full text-center">
            <p>Already have an account? <span className="text-yellow-500 "><a href="#">Login</a></span></p>
      </div>
      </div>

    );

}

export default RegisterUserForm