import login from '../assets/img/login.png'
import face from '../assets/img/face.png'
import google from '../assets/img/google.png'
import '../Components/PaginaLogin.css'
import { HeaderLogin } from './HeaderLogin'
import { FooterLogin } from './FooterLogin'

export const PaginaLogin = () => {
    return (
        <>
            <HeaderLogin />
            <div className="flex items-center justify-center min-h-screen">
               <div className="h-1/5 p-5 m-5 bg-white flex flex-col items-center justify-center">
                     <label className="text-4xl font-semibold">Welcome Back!</label>
                    <div className="text-left">
                        <form className="text-left h- pt-4">
                            <div>
                                <label htmlFor="username" className="block mb-1 text-lg text-[#7E22CE] pb-1.5 pt-6">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1 text-lg text-[#7E22CE] pb-1.5 pt-6">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="button" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot your password?</button>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <img src={login} alt="Login" width="18px" height="18px" className="inline-block mr-2" />
                                Login
                            </button>
                            <button type="button" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <span>Or login with</span>
                            </button>
                            <div className="flex space-x-4">
                                <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <img src={face} alt="Facebook" width="18px" height="18px" className="inline-block mr-2" />
                                    Facebook
                                </button>
                                <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <img src={google} alt="Google" width="18px" height="18px" className="inline-block mr-2" />
                                    Google
                                </button>
                            </div>
                            <div className="mt-6 text-center">
                                <button type="button" className="text-sm text-gray-600 hover:text-gray-500">
                                    <span>Dont have an account? Sign up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterLogin />
        </>
    );
}
