import rayo from '../assets/img/rayo.png'
import img from '../assets/img/i.png'
import imgAterrizaje from '../assets/img/Aterrizaje.jpg'
import diseno from '../assets/img/1.jpg'
import fondo from '../assets/img/fondo.jpg'
import avion from '../assets/img/avion.png'
import paleta from '../assets/img/paleta.png'
import mundo from '../assets/img/mundo.png'
import '../Components/PaginaAterrizaje.css'
import { HeaderComponent } from './HeaderComponent'
import { FooterComponent } from './FooterComponent'
import { Link } from 'react-router-dom'

export const PaginaAterrizaje = () => {

    const Comenzar = () => {
        console.log('click');
    }

    const MasInfo = () => {
        console.log('click');
    }

    return (
        <>
            <HeaderComponent />
            <div className="bg-[#AF33EA] flex flex-col items-center justify-between min-h-screen">
                <div className="bg-fuchsia-50 w-full flex flex-col items-center">
                    <div className="bg-[#AF33EA] text-center p-10 w-full flex flex-col items-center">
                        <label className="text-8xl text-white font-bold">Ahsoka Voice</label>
                        <br />
                        <div className="text-[18px] text-white text-center w-full">
                            Explora un mundo de posibilidades con nuestra plataforma.<br />
                            Diseñada para facilitar tu día a día.
                        </div>
                    </div>
                    <div className=" bg-[#AF33EA] text-center p-8 w-full">
                        <button className="bg-[#CE22BD] text-white py-4 px-5 rounded inline-flex items-center" onClick={Comenzar}>
                            <img src={rayo} alt="" width="16px" height="16px" className="mr-2" />
                            Comenzar
                        </button>
                        <button className="bg-[#CE22BD] text-white py-4 px-5 rounded inline-flex items-center ml-4" onClick={MasInfo}>
                            <img src={img} alt="" width="16px" height="16px" className="mr-2" />
                            Más Info
                        </button>
                    </div>
                </div>
                <Link to="#" className="block mx-auto">
                    <img src={imgAterrizaje} alt="Imagen de Aterrizaje" width="1206px" height="384px" className="block mx-auto" />
                </Link>
                <div className="bg-[#AF33EA] text-center py-8">
                    <label className="text-5xl text-white font-bold">Lo que nuestros usuarios dicen</label>

                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <div className="bg-[#B622CE] text-white p-8 text-justify my-8 w-[37.50rem]">
                            <p className="text-lg">`AV ha revolucionado la forma en que gestiono mis proyectos. La interfaz intuitiva y las herramientas integradas han hecho que mi trabajo sea mucho más eficiente.`</p>
                            <div className="flex items-end justify-start mt-8">
                                <img className="rounded-full" src={diseno} alt="María González" width="48px" height="48px" />
                                <div className="ml-4 text-left text-white">
                                    <div>
                                        <p className="font-semibold">María González</p>
                                        <p className="text-sm">Diseñadora Gráfica</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#B622CE] text-white p-8 text-justify my-8 w-[37.50rem]">
                            <p className="text-lg">`La plataforma de AV es increíblemente fácil de usar y ha mejorado la colaboración en nuestro equipo. ¡Altamente recomendado!`</p>
                            <div className="flex items-end justify-start mt-8">
                                <img className="rounded-full" src={fondo} alt="Juan Pérez" width="48px" height="48px" />
                                <div className="ml-4 text-left text-white">
                                    <div>
                                        <p className="font-semibold">Juan Pérez</p>
                                        <p className="text-sm">Gerente de Proyectos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#9722CE] flex justify-center flex-col items-center pb-24 pt-16 mb-8">
                    <label className="text-white text-5xl font-bold">Nuestros Servicios</label>
                    <br />
                    <p className="text-white text-lg mt-4">Descubre las herramientas que hemos creado para simplificar tu vida.</p>
                    <div className="flex justify-center mt-8 space-x-12 flex-grow">
                        <div className="bg-[#A521A8] text-center w-1/4 p-6">
                            <img className="mx-auto" src={avion} alt="" width="36px" height="36px" />
                            <label className="text-[20px] text-white block text-lg font-semibold mt-4">Rápido y Eficiente</label>
                            <p className="text-white text-base font-normal mt-4">Accede a tus necesidades de forma inmediata con nuestras soluciones ágiles.</p>
                        </div>
                        <div className="bg-[#A521A8] text-center w-1/4 p-6">
                            <img className="mx-auto" src={paleta} alt="" width="36px" height="36px" />
                            <label className="text-[20px] text-white block text-lg font-semibold mt-4">Diseño Personalizado</label>
                            <p className="text-white text-base font-normal mt-4">Crea con libertad utilizando nuestras herramientas de diseño intuitivas.</p>
                        </div>
                        <div className="bg-[#A521A8] text-center w-1/4 p-6">
                            <img className="mx-auto" src={mundo} alt="" width="36px" height="36px" />
                            <label className="text-[20px] text-white block text-lg font-semibold mt-4">Conexión Global</label>
                            <p className="text-white text-base font-normal mt-4">Mantente conectado con el mundo a través de nuestras plataformas de comunicación.</p>
                        </div>
                    </div>


                    <div className="flex-grow"></div>
                </div>

            </div>
            <FooterComponent />
        </>
    )
}
