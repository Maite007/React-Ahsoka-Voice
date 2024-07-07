import rayo from '../assets/img/rayo.png'
import foto from '../assets/img/1.png'
import foto2 from '../assets/img/2.png'
import foto3 from '../assets/img/3.png'


export const FooterLogin = () => {


    return (
        <>

            <div className="bg-[#AF33EA] flex flex-col items-center justify-between p-10 w-full ">
                <div className="AV-Container">
                    <img className="img-dialogo3" src={rayo} alt="Logo" width="36px" height="36px" />
                    <label className="letter7">AppName</label>
                </div>
                <div className="container-dialogo5">
                    <label className="letter8">Acerca de Nosotros</label>
                    <label className="letter8">Términos y Condiciones</label>
                    <label className="letter8">Política de Privacidad</label>
                    <label className="letterAyuda8">Ayuda</label>
                </div>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
                    <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                        <img src={foto} alt="Icon 1" width="24px" height="24px" />
                    </div>
                    <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                        <img src={foto2} alt="Icon 2" width="24px" height="24px" />
                    </div>
                    <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                        <img src={foto3} alt="Icon 3" width="24px" height="24px" />
                    </div>
                    </div>
                </div>
                <label className="letter4">© 2024 AV. Todos los derechos reservados.</label>
            </div>
        </>
    )
}
