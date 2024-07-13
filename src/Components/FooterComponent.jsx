

import pantalla from '../assets/img/pantalla.png'
import foto1 from '../assets/img/1.png'
import foto2 from '../assets/img/2.png'
import foto3 from '../assets/img/3.png'



export const FooterComponent = () => {



    return (
        <>
            <div className="bg-[#AF33EA] flex flex-col items-center justify-between p-10 w-full ">
                <div className="flex items-center">
                    <img className="pt-8 pb-4" src={pantalla} width="36px" height="36px" alt="Logo" />
                    <label className="text-white text-2xl font-bold pl-1.5 text-center pt-5">AV</label>
                </div>
                <div className="grid grid-cols-4 pl-40 pb-11">
                    <label className="letter8">Acerca de Nosotros</label>
                    <label className="letter8">Términos y Condiciones</label>
                    <label className="letter8">Política de Privacidad</label>
                    <label className="letterAyuda8">Ayuda</label>
                </div>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
                        <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                            <img src={foto1} alt="" width="24px" height="24px" />
                        </div>
                        <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                            <img src={foto2} alt="" width="24px" height="24px" />
                        </div>
                        <div className="flex justify-center items-center p-4 bg-[#9722CE] w-20 h-16 rounded-md">
                            <img src={foto3} alt="" width="24px" height="24px" />
                        </div>
                    </div>
                </div>
                <label className="text-white font-normal text-lg p-6">© 2023 AV. Todos los derechos reservados.</label>
            </div>

        </>
    )
}
