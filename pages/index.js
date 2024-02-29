import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import Producto from '../components/Producto';

export default function Home() {
  const {categoriaActual} =useQuiosco();

  return (
    <>
      <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
        <h1 className='text-4xl font-black '>{categoriaActual?.nombre}</h1>
        <p className=' sm:text-2xl text-xl my-10'>
            Elige y personaliza tu pedido a continuación
        </p>

        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {categoriaActual?.productos?.map(producto => (
              <Producto key={producto.id} producto={producto} />
            ))}
        </div>

      </Layout>
    </>
  )
}
