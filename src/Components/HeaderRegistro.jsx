
import trofeo from '../assets/img/Trofeo.png'
import casita from '../assets/img/Casita.png'
import lapiz from '../assets/img/Lapiz.png'
import { useNavigate } from 'react-router-dom';

export const HeaderRegistro = () => {
    const navigate = useNavigate();

    const funcionbotonAterrizaje = () => {
        navigate("/paginaAterrizaje");
    };

    const funcionbotonLogin = () => {
        navigate("/paginaLogin");
      };
    

    return (
        <>
            <div className="bg-[#AF33EA] flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={trofeo} alt="Logo" width="36px" height="36px" />
                    <label className="letter">AV</label>
                </div>
                <div className="flex items-center">
                    <button className="button flex items-center mr-4" onClick={funcionbotonAterrizaje}>
                        <img src={casita} alt="Home" width="16px" height="16px" className="mr-2" />
                        Home
                    </button>
                    <button className="button flex items-center mr-4" onClick={funcionbotonLogin}>
                        <img src={lapiz} alt="Login" width="16px" height="16px" className="mr-2" />
                        Login
                    </button>

                </div>
            </div>
        </>
    )
}
