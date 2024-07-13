import { Link } from "react-router-dom"
import { FooterPerfil } from "./FootPerfil"
import { HeaderPerfil } from "./HeaderPerfil"
import pencil from '../assets/img/Pencil.png'
import tacho from '../assets/img/tacho.png'
import martillo from '../assets/img/martillo.png'
import perfil from '../assets/img/perfil.jpg'
import camara from '../assets/img/camara.png'

const PaginaPerfil = () => {
  return (
    <>
    <HeaderPerfil/>
    <div>
      
    <div className="  justify-center form-container py-6 mx-96 bg-white rounded-xl">
      <h2 className="text-[#9333EA] text-3xl font-bold text-center mb-6">Edit Profile</h2>
      <form className="custom-form grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="username" className="font-medium text-lg text-purple-700 pt-4">Username</label>
          <input type="text" id="username" name="username" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="font-medium text-lg text-purple-700 pt-4">Password</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="font-medium text-lg text-purple-700 pt-4">Name</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="titulo" className="font-medium text-lg text-purple-700 pt-4">Surname</label>
          <input type="text" id="titulo" name="titulo" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="fecha" className="font-medium text-lg text-purple-700 pt-4">Date of Birth</label>
          <input type="date" id="fecha" name="fecha" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="area" className="font-medium text-lg text-purple-700 pt-4">Email</label>
          <input type="text" id="area" name="area" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </form>
       <div className="flex justify-center gap-4 py-4">
        <div className="flex space-x-2"> 
        <Link className='btn flex font-semibold text-base rounded-md bg-[#9333EA] hover:bg-violet-700 text-white py-2 px-4'>
        <img src={pencil} alt="Edit" className="w-4 h-4 my-auto mr-2 "/>
        Edit
        </Link>   
        <Link className='btn flex font-semibold text-base rounded-md bg-red-500 hover:bg-red-700 text-white py-2 px-4'>
        <img src={tacho} alt="Cancel" className="w-4 h-4 my-auto mr-2 "/>
        Cancel
        </Link> 
        <Link className=' btn flex font-semibold text-base rounded-md bg-green-500 hover:bg-green-700 text-white py-2 px-4'>
        <img src={martillo} alt="Save" className="w-4 h-4 my-auto mr-2"/>
        Save
        </Link>    
        </div>
        </div>
        <div className="py-8">
            <h2 className="text-[#9333EA] text-3xl font-bold text-center mb-6">Profile Picture</h2>
            <div className="flex items-center justify-center">
                <div className="relative flex items-center gap-4">
                    <img src={perfil} alt="perfil" className="w-48 h-48 object-cover rounded-full transform -rotate-6" />
                    <Link className="bg-[#9722CE] text-white btn flex font-semibold text-base rounded-md py-2 px-4">
                    <img src={camara} alt="perfil" width="24px" height="24px" />
                    Change Picture
                    </Link>
                </div>
                <div className="ml-4">
                    <div className="round">
                        <input type="file" className="hidden" />
                        <label htmlFor="file-input" className="cursor-pointer">
                            <i className="fa fa-camera text-white"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

      
    </div>
    <FooterPerfil/>
    
    </>
  )
}

export default PaginaPerfil
