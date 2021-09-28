module.exports= poke => {
    poke = poke.dataValues.types.map(e => e.dataValues.name);
    return poke;
}