import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="sm:flex">
            <aside className="sm:w-4/12 md:w-1/4 lg:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="sm:w-8/12 md:w-3/4 lg:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}