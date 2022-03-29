// Desestructuracion
//Asignacion Desestrcturante

const persona ={
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};

// const  { nombre,edad,clave } = persona;

/*console.log(nombre);
console.log(edad);
console.log(clave);
*/
const userContext =({nombre, edad,clave, rango='Capitán'} )=>{

 //  console.log(nombre, edad,rango); 

 return {
     nombreClave:clave,
     anios:edad,
     latlng:{
        lat:14.1245,
        lng:-12.5488
     }
 }
}

//const avenger = userContext(persona);


const {nombreClave,anios,latlng}=userContext(persona);
const {lat,lng}= latlng;
console.log(nombreClave,anios);
console.log(lat,lng);