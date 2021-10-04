const router = require('express').Router();
const axios = require('axios');
const {Type} = require('../db')

router.get('/',async (req,res) => {
    let types = await Type.findAll({
        attributes: ['name']
    });
    if(!types.length){
    types = await axios.get('https://pokeapi.co/api/v2/type');
    types = types.data.results.map((e) => {
        return{
            name:e.name,
        }
    }
    );
    Type.bulkCreate(types);}
    res.send(types);
})

module.exports = router