

import { Link } from 'react-router-dom';
import { FooterRegistro } from './FooterRegistro';
import { HeaderRegistro } from './HeaderRegistro';


const PaginaRegistro = () => {


  return (
  <>
  <HeaderRegistro></HeaderRegistro>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className=" my-12  m-auto  p-8 bg-[#fff] rounded-xl relative mb-20">
    <h1 className=" text-[#9333EA] text-4xl font-bold text-center mb-6">Register</h1>
    <form action="#">
      <div className="mt-4">
        <input 
          type="text" 
          id="name" 
          name="First Name" 
          placeholder="First Name" 
          required 
          className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <input 
          type="text" 
          id="lastName" 
          name="Last Name" 
          placeholder="Last Name" 
          required 
          className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <input 
          type="email" 
          id="email" 
          name="Email" 
          placeholder="Email" 
          required 
          className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mt-4">
        <input 
          type="password" 
          id="password" 
          name="Password" 
          placeholder="Password" 
          required 
          className="w-full p-3 rounded-md text-base text-[#333333] pt-4 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className='flex justify-end pt-4'>
      <Link
        className="w-[420px] flex justify-center py-4 pt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9333EA] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Register
      </Link>
      </div>
      <div className="flex justify-end pt-4">
      <Link className=" btn-flex mb-1 text-sm font-normal text-[#7E22CE] pb-1.5 pt-4 text-right">By registering you agree to our <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a></Link>
      </div>
    </form>
  </div>
</div>

  <FooterRegistro></FooterRegistro>
  </>
      


      
  );
};


export default PaginaRegistro;