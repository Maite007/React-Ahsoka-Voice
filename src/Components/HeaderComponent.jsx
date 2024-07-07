
import trofeo from '../assets/img/Trofeo.png';
import lapiz from '../assets/img/Lapiz.png';
import persona from '../assets/img/persona.png';
import '../Components/Header.css';
import { useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const funcionbotonLogin = () => {
    navigate("/paginaLogin");
  };

  const funcionbotonRegister = () => {
    navigate("/paginaRegistro");
  };

  return (
    <>
      <div className="bg-[#AF33EA] flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={trofeo} alt="trofeo" width="36px" height="36px" />
          <label className="ml-2 letter">AV</label>
        </div>
        <div className="flex items-center">
          <button className="button flex items-center mr-4" onClick={funcionbotonLogin}>
            <img src={lapiz} alt="Login" width="16px" height="16px" className="mr-2" />
            Login
          </button>
          <button className="button flex items-center" onClick={funcionbotonRegister}>
            <img src={persona} alt="Register" width="16px" height="16px" className="mr-2" />
            Register
          </button>
        </div>
      </div>
    </>
  );
};
