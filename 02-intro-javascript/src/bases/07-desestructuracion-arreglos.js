const personajes= ['Goku','Vegeta','Gohan'];
const [,,p3]=personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC',123]
}
const [letras, numeros]=retornaArreglo();
console.log(letras, numeros);

//Tarea

const userState =(valor)=>{
return [valor,()=>{console.log('Hola Mundo '+ valor)}];
};
const [nombre,setNombre] = userState('Goku');

setNombre();