module.exports= poke => {
    poke = poke.types.map(e => e.dataValues.name);
    return poke;
}