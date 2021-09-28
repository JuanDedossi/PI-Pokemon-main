const router = require('express').Router();
const axios = require('axios');
const e = require('express');
const {Pokemon, Type} = require('../db');
const getDatos = require('../functions/getDatos');
const getID = require('../functions/getID');
const getNamestypes = require('../functions/getNamestypes');


router.get('/',async (req,res) => {
    var {name,offset} = req.query;
    let limit = 12;
    if(!name){
        if(!offset){
            offset=0;
        }
    var pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    pokemons = pokemons.data.results;
    let pok = [];
    for(let i =0; i<pokemons.length;i++){
        let resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons[i].name}`);
        pok.push({name: resp.data.name,img:resp.data.sprites.other.dream_world.front_default,types:resp.data.types.map(e => e.type.name)});
    }
    if(offset===0){
    var dbpok = await Pokemon.findAll({
        attributes:['name','img'],
        include:Type
    });
    dbpok =dbpok.map(e => {return{dataValues:{...e.dataValues,types:getNamestypes(e)}}})
    return res.send([...dbpok,...pok]);
    }
    res.send(pok)
}
else{
    try{
        let pokemons = await Pokemon.findOne({
            where:{
                name:name
            }
            }
        )
        return res.send(pokemons)
    }
    catch{
        try{
            pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            pokemons = getDatos(pokemons);
            return res.send(pokemons)
        }
        catch{
            res.status(404).send('pokemon not found');
        }
    }
}
})

router.get('/:id',async (req,res) => {
    const {id} = req.params;
        try{
            let pokedata = await Pokemon.findOne({where:{id}},{include:Type});
            return res.json(pokedata);
        }
        catch{
            try{
                let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`);
                poke = getDatos(poke);
               return res.send(poke);
            }
            catch{
                return res.status(404).send('ID not found')
            }
        }
})


router.post('/',async (req,res) => {
    const {name,hp,strength,defense,speed,height,weight,img,types} = req.body;
    if(name){
       const poke =  await Pokemon.create({
            name,
            hp,
            strength,
            speed,
            defense,
            height,
            weight,
            img
        })
        if(types){
            const ty = await getID(types);
            poke.setTypes(ty);
        }
        return res.send(poke);
    }
    res.status(404).send('Name is required to create a new pokemon')
})

router.get('/')


module.exports = router;