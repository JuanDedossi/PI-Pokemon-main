const axios = require('axios');


export async function load(){
    let pokes = await axios.get("http://localhost:3001/pokemons");
    return {type:'LOAD',pokes:pokes.data}
}

export async function loadTypes(){
    let types = await axios.get("http://localhost:3001/types");
    return {type:'TYPES',types:types.data}
}

export async function search(str){
        let poke = await axios.get(`http://localhost:3001/pokemons?name=${str}`);
        return {type:'DETAILS', poke:poke.data}
}

export function filter(str){
    const [order,fil] = str.split(' ');
        return {type:'FILTER',order,fil};
}

export function filterCreate(str){
    const [,fil] = str.split(' ');
    return {type:'FILTERCREATE',fil};
}

export function filterType(str){
    return{type:'FILTERTYPE',order:str}
}

export async function create(obj){
    let resp = await axios.post('http://localhost:3001/pokemons',{
        name:obj.name,
        hp:obj.hp,
        strength:obj.strength,
        defense:obj.defense,
        speed:obj.speed,
        weight:obj.weight,
        height:obj.height,
        img:obj.img,
        types:obj.types
    })
    return resp.data;
}
