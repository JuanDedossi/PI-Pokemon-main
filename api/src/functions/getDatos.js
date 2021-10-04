module.exports = datos => {
    return{
        name:datos.data.name,
            img:datos.data.sprites.versions['generation-v']["black-white"].animated.front_default,
            types:datos.data.types.map(e => e.type.name),
            id:datos.data.id,
            hp:datos.data.stats[0].base_stat,
            strength:datos.data.stats[1].base_stat,
            defense:datos.data.stats[2].base_stat,
            speed:datos.data.stats[5].base_stat,
            height:datos.data.height,
            weight:datos.data.weight
    }
}