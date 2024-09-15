
const LoginBodyContainer = () =>{

    return (
        <div className="dark:text-white md:w-[50%] h-screen  flex flex-col place-items-center  pt-28">
        <p className="font-bold text-2xl ">Log in Account</p>
        <p className="mt-2">Welcome back, Log in with your email</p>

        <div className="mt-8">
            <p>Email</p>
            <input type="email" className="outline-none w-[300px] p-3 rounded-2xl text-black " />
        </div>
 
        <div className="mt-8">
            <p>Password</p>
            <input type="password" className="outline-none w-[300px] p-3 rounded-2xl text-black " />
        </div>

        <div className="bg-[#EDD777] hover:bg-opacity-100   bg-opacity-90 w-[300px] p-4 rounded-2xl text-center mt-8">
            <p>Login</p>
        </div>

        <div className="mt-10 flex flex-col  gap-3">
            <p className="text-sm">Forgot Password ?</p>

            <p className="text-sm" >{'Don\'t have Account?    ' }<span className="text-[#EDD777] hover:underline cursor-pointer">Register</span></p>
        </div>

       </div>

    );
}

export default LoginBodyContainer