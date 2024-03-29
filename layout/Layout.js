import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Modal from 'react-modal';
import useQuiosco from '../hooks/useQuiosco';
import ModalProducto from '../components/ModalProducto';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '../components/Pasos';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');


export default function Layout({children, pagina}) {

    const {modal} = useQuiosco(); 
  
    return (
      <>
        <Head>
            <title>Fresh Coffee - {pagina}</title>
            <meta name='description' content='Quiosco Cafeteria' />
        </Head>

        <div className='ss:flex'>
            <aside className='sm:w-4/12 md:w-1/4 lg:w-1/5'>
                <Sidebar />

            </aside>

            <main className='ss:w-8/12 md:w-3/4 lg:w-4/5 h-screen overflow-y-scroll'>
                <div className='p-10'>
                    <Pasos />
                    {children}
                    
                </div>
            </main>
        </div>

        {modal && (
            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <ModalProducto />
            </Modal>
          
        )}
        {/* REGISTRAR NOTIFICACION DONDE DESEO QUE SE MUESTRE */}
        <ToastContainer />
      </>
    )
  }