import { error } from 'console';
import { categorias } from './data/categorias'
import { productos } from './data/productos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const main = async () : Promise<void> => {
    try{
        await prisma.categoria.createMany({
            data: categorias
        })

        await prisma.producto.createMany({
            data: productos
        })
    } catch {
        console.log(error);
    }
}
main();
