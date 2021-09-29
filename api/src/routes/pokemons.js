const router = require('express').Router();
const axios = require('axios');
const e = require('express');
const {Pokemon, Type} = require('../db');
const getDatos = require('../functions/getDatos');
const getID = require('../functions/getID');
const getNamestypes = require('../functions/getNamestypes');


router.get('/',async (req,res) => {
    var {name} = req.query;
    let limit = 12; // limita cant pokemons por pagina
    if(!name){
        var dbpok = [];
        dbpok = await Pokemon.findAll({
            attributes:['id','name','img'],
            include:Type
        });
    var pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0`);
    let taka = await axios.get(`${pokemons.data.next}`);
    pokemons=[...pokemons.data.results,...taka.data.results];
    // pokemons = pokemons.data.results;
    //genera un array de promesas
    pokemons = pokemons.map(e => axios.get(e.url));
    var pok = [];
    //ejecuta las promesas y coloca los valores correspondientes
    let data = await Promise.all(pokemons)
    data.forEach(resp => 
            pok.push({name: resp.data.name,img:resp.data.sprites.other.dream_world.front_default,types:resp.data.types.map(e => e.type.name)})
        )
    dbpok =dbpok.map(e => {return{...e.dataValues,types:getNamestypes(e.dataValues)}})
    return res.send([...dbpok,...pok]);
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
            let pokedata = await Pokemon.findOne({where:{id},include:Type});
            pokedata = {...pokedata.dataValues,types:getNamestypes(pokedata)}
            console.log(pokedata);
            return res.send(pokedata);
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



module.exports = router;