import login from '../assets/img/login.png'
import face from '../assets/img/face.png'
import google from '../assets/img/google.png'
import { HeaderLogin } from './HeaderLogin'
import { FooterLogin } from './FooterLogin'
import { Link } from 'react-router-dom'

export const PaginaLogin = () => {
    return (
        <>
            <HeaderLogin />
            <div className=" text-[#6B21A8] first-letter:flex items-center justify-center min-h-screen">
               <div className=" flex-col justify-center my-8  m-auto p-8 bg-[white] w-[500px] h-10">
               <label className=" flex justify-center text-4xl font-semibold text-center">Welcome Back!</label>
                    <div className="text-left">
                        <form className="text-left h- pt-4">
                            <div>
                                <label htmlFor="username" className=" font-medium text-lg text-purple-700 pt-4">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 " />
                            </div>
                            <div>
                                <label htmlFor="password" className=" font-medium block mb-1 text-lg text-purple-700 pb-1.5 pt-6 ">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 " />
                            </div>
                            <div className="flex justify-end">
                                <Link className=" btn-flex mb-1 text-sm font-normal text-[#7E22CE] pb-1.5 pt-4 text-right">Forgot your password?</Link>
                            </div>
                            <Link className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <img src={login} alt="Login" width="18px" height="18px" className="mr-2 w-4 h-4 my-auto"  />
                                Login
                            </Link>
                            <Link className=" btn-flex text-[#9333EA] cursor-pointer flex relative items-center justify-center py-2  px-5  mt-2 mb-6">Or login with</Link>
                            <div className="flex space-x-4">
                                <Link className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <img src={face} alt="Facebook" width="18px" height="18px" className="mr-2 w-4 h-4 my-auto" />
                                    Facebook
                                </Link>
                                <Link className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <img src={google} alt="Google" width="18px" height="18px" className="mr-2 w-4 h-4 my-auto" />
                                    Google
                                </Link>
                            </div>
                            <div className="mt-6 text-center">
                            <Link className=" btn-flex mb-1 text-sm font-normal text-[#7E22CE] pb-1.5 pt-4 text-right">Dont have an account? Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterLogin />
        </>
    );
}
