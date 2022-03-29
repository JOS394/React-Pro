const persona ={
nombre:'Tony',
apellido:'Stark',
edad:45,
direccion: {
    ciudad:'Ney york',
    zip:5464811,
    lat:14.3264,
    lng:34.923334654,

}
};



const persona2= {...persona};
persona2.nombre='Peter'

console.log(persona);
console.log(persona2);