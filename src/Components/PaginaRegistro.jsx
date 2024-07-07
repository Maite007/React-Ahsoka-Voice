

import '../Components/PaginaRegistro.css'
import { FooterRegistro } from './FooterRegistro';
import { HeaderRegistro } from './HeaderRegistro';


const PaginaRegistro = () => {


  return (
  <>
  <HeaderRegistro></HeaderRegistro>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className=" my-12  m-auto  p-8 bg-[#fff] rounded-xl relative mb-20">
    <h1 className="text-4xl font-bold text-center mb-6">Register</h1>
    <form action="#">
      <div className="mt-4">
        <input 
          type="text" 
          id="name" 
          name="First Name" 
          placeholder="First Name" 
          required 
          className="w-full rounded mb-3.5 text-[#9CA3AF] relative h-14"
        />
      </div>
      <div className="mt-4">
        <input 
          type="text" 
          id="lastName" 
          name="Last Name" 
          placeholder="Last Name" 
          required 
          className="w-full rounded mb-3.5 text-[#9CA3AF] relative h-14"
        />
      </div>
      <div className="mt-4">
        <input 
          type="email" 
          id="email" 
          name="Email" 
          placeholder="Email" 
          required 
          className="w-full rounded mb-3.5 text-[#9CA3AF] relative h-14"
        />
      </div>
      <div className="mt-4">
        <input 
          type="password" 
          id="password" 
          name="Password" 
          placeholder="Password" 
          required 
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className=" bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">By registering you agree to our <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a></span>
      </div>
    </form>
  </div>
</div>

  <FooterRegistro></FooterRegistro>
  </>
      


      
  );
};


export default PaginaRegistro;