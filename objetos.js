const datos = {
    nombre: "Nicolas",
    apellido: "Parra",
    edad: 20,
    altura: 1.80,
    esDesarrollador: true
}

const edad = datos.edad;
const lista = [
    {
        ...datos
    },
    {
        nombre: "Paula",
        apellido: "Andrea",
        edad: 20,
        esDesarrollador: true
    },
    {
    nombre: "Sebastian",
    apellido: "Suaza",
    edad: 19,
    esDesarrollador: true,
    }

]
const listaOrdenada = lista.sort((a,b) => {b.edad - a.edad });
console.log(listaOrdenada);
