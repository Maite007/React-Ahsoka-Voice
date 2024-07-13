
import trofeo from '../assets/img/Trofeo.png';
import lapiz from '../assets/img/Lapiz.png';
import persona from '../assets/img/persona.png';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {

  return (
    <>
      <div className="bg-[#AF33EA] flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={trofeo} alt="trofeo" width="36px" height="36px" />
          <label className="ml-2 text-white text-2xl font-bold pl-1.5 text-center">AV</label>
        </div>
        <div className="flex items-center">
          
        <Link className='btn flex bg-white text-[#9333EA] font-semibold text-base rounded-md border-white pt-2 pb-2 pl-4 pr-4 mr-4 ' to='/paginalogin'>
        <img src={lapiz} alt="Login" className="mr-2 w-4 h-4 my-auto" />
         Login
         </Link>   

         <Link className='btn flex bg-white text-[#9333EA] font-semibold text-base rounded-md border-white pt-2 pb-2 pl-4 pr-4 mr-4 ' to='/paginaRegistro'>
        <img src={persona} alt="Register" className="mr-2 w-4 h-4 my-auto" />
        Register
         </Link> 
        </div>
      </div>
    </>
  );
};
