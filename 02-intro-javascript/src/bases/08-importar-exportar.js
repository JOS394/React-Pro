import heroes,{owners} from "../data/heroes";


const getHeroeById =(id)=>heroes.find((heroe)=>heroe.id===id);


const getHeroesByowner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner)

//console.log(getHeroeById(2));
//console.log(getHeroesByowner('DC'));

export {
    getHeroeById,
    getHeroesByowner
}

