import useSWR from "swr";
import AdminLayout from "../layout/AdminLayout";
import axios from "axios";
import Orden from "../components/Orden";

export default function Admin(){

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

    // console.log(data);
    // console.log(error);
    // console.log(isLoading);

    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="ss:text-4xl text-2xl font-black">Panel de Administración</h1>
            <p className="ss:text-2xl text-xl my-10">Administra las ordenes</p>
            
            {data && data.length  ? data.map(orden => (
                <Orden
                    key={orden.id}
                    orden={orden}
                />
            )) : <p className="font-bold text-amber-400">No hay ordenes pendientes</p>}
        </AdminLayout>
    )
}