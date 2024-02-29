import Image from "next/image";
import { formatearDinero } from "../helpers";
import axios from "axios";
import { toast } from "react-toastify";


export default function Orden({orden}) {
    const {id, nombre, total, pedido} = orden;

    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden Completada', {
                autoClose: 3000,
            })
        } catch (error) {
            toast.error('Hubo un error!', {
                autoClose: 3000,
            })
        }
    }

    return (
        <div className='border p-10 space-y-5'>
            <h3 className="text-2xl font-black">Orden: {id}</h3>
            <p className="text-lg my-10">Cliente: {nombre}</p>
            <div>
                {pedido.map(plato => (
                    <div key={plato.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
                        <div className='w-32'>
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${plato.imagen}.jpg`}
                                alt={`Imagen Plato ${plato.nombre}`}                            
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">
                                {plato.nombre}
                            </h4>
                            <p className="text-lg font-bold">Cantidad: {plato.cantidad}</p>
                        </div>
                    </div>
                    

                ))}

            </div>
            <div className="sm:flex sm:items-center sm:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">Total a pagar: {formatearDinero(total)}</p>
                <button 
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 mt-5 sm:mt-0 py-3 px-10 uppercase font-bold text-white rounded-lg"
                    onClick={completarOrden}
                >
                    Completar Orden
                </button>
            </div>
        </div>
    )
}
