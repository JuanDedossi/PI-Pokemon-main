// const grass = require('../img/Type_Background_Grass.png')

export default function getImage(name){
    if(name === 'unknown'){
        return document.getElementById("divDeta").style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvLAwg72sQx8XP7-yoWPe3W3rQ_J-3joVzQ&usqp=CAU')` 
    }
    else if(name === 'shadow'){
       return  document.getElementById("divDeta").style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU8f0VkUGs7UmEL1W929I7YjXNwFikTbdrg&usqp=CAU')`
    }
    const image = [
        'https://static.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png',
        "https://static.wikia.nocookie.net/pokemongo/images/f/f5/Type_Background_Dark.png",
        "https://static.wikia.nocookie.net/pokemongo/images/0/05/Type_Background_Bug.png",
        "https://static.wikia.nocookie.net/pokemongo/images/2/28/Type_Background_Dragon.png",
        'https://static.wikia.nocookie.net/pokemongo/images/6/6c/Type_Background_Electric.png',
        'https://static.wikia.nocookie.net/pokemongo/images/1/19/Type_Background_Fairy.png',
        'https://static.wikia.nocookie.net/pokemongo/images/1/17/Type_Background_Fighting.png',
        'https://static.wikia.nocookie.net/pokemongo/images/6/64/Type_Background_Fire.png',
        'https://static.wikia.nocookie.net/pokemongo/images/6/65/Type_Background_Flying.png',
        'https://static.wikia.nocookie.net/pokemongo/images/4/44/Type_Background_Ghost.png',
        'https://static.wikia.nocookie.net/pokemongo/images/a/a3/Type_Background_Ground.png',
        'https://static.wikia.nocookie.net/pokemongo/images/8/85/Type_Background_Ice.png',
        'https://static.wikia.nocookie.net/pokemongo/images/f/f6/Type_Background_Normal.png',
        'https://static.wikia.nocookie.net/pokemongo/images/d/db/Type_Background_Poison.png',
        'https://static.wikia.nocookie.net/pokemongo/images/f/f8/Type_Background_Psychic.png',
        'https://static.wikia.nocookie.net/pokemongo/images/5/5d/Type_Background_Rock.png',
        'https://static.wikia.nocookie.net/pokemongo/images/3/30/Type_Background_Steel.png',
        'https://static.wikia.nocookie.net/pokemongo/images/d/d2/Type_Background_Water.png'
    ]
    name = name[0].toUpperCase() + name.slice(1);
    let img = image.find(e => e.includes(name))
    document.getElementById("divDeta").style.backgroundImage = `url(${img})`
}