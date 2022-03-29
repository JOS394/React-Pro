//const saludar= function (nombre) {
 //   return `Hola, ${nombre}`
//}


const saludar2 =(nombre)=> {
    return `Hola, ${nombre}`
}
const saludar3 = (nombre)=> `Hola, ${nombre}`;

const saludar4 = () =>'Hola Mundo'
console.log(saludar2('goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser =() =>({
        uid:'ABC123',
        username:'ElPepe'
    })
console.log(getUser());


//Tarea

function getUsuarioActivo(nombre) {
    return{
        uid:'ABC567',
        username:nombre
    }
    
}

const usuarioActivo = getUsuarioActivo('Jose');
console.log(usuarioActivo);

//Resolviendo tarea

const userActive = (name) => ({
uid:'ABC567',
username:name

})

console.log(userActive('Wilfredo'));

