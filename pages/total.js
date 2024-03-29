import { useCallback, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco"
import Layout from "../layout/Layout"
import { formatearDinero } from "../helpers";


export default function Total() {

    const {pedido, nombre, setNombre, colocarOrder, total} = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length <= 2;
    }, [pedido, nombre]);

    useEffect(() => {
      comprobarPedido()
    }, [pedido, comprobarPedido])

    return (
        <Layout pagina='Total y Confirmar Pedido'>
        <h1 className="text-4xl font-black">Datos del pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido pedido</p>

        <form onSubmit={colocarOrder}>
            <div>
                <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                <input id="nombre" type="text" 
                        className="bg-gray-200 w-full sm:w-auto mt-3 p-2 rounded-md" 
                        value={nombre} 
                        onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="mt-10">
                <p className="text-2xl">Total a pagar {''} <span className="font-bold">{formatearDinero(total)}</span></p>

            </div>

            <div className="mt-5">
                <input type="submit" value="Confirmar Pedido"
                    className={`${comprobarPedido() ? "bg-indigo-100 hidden" : "bg-indigo-600 hover:bg-indigo-800"} w-full sm:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`} 
                />
            </div>

        </form>
    </Layout>
    )

}
