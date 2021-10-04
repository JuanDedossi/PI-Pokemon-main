
export default function getIcon(name){
    if(name === 'unknown'){
       return 'https://cdn2.bulbagarden.net/upload/thumb/b/ba/UnknownIC_Colo.png/48px-UnknownIC_Colo.png'
    }
    const icons = [
         'https://cdn2.bulbagarden.net/upload/thumb/0/0f/NormalIC.png/70px-NormalIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/9/9b/FightingIC.png/70px-FightingIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/d/dc/FlyingIC.png/70px-FlyingIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/8/86/PoisonIC.png/70px-PoisonIC.png',
        'https://cdn2.bulbagarden.net/upload/thumb/8/87/GroundIC.png/70px-GroundIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/e/e6/RockIC.png/70px-RockIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/b/bd/BugIC.png/70px-BugIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/c/c3/GhostIC.png/70px-GhostIC.png',
        'https://cdn2.bulbagarden.net/upload/thumb/7/7e/SteelIC.png/70px-SteelIC.png',
        'https://cdn2.bulbagarden.net/upload/thumb/9/9f/FireIC.png/70px-FireIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/b/b0/WaterIC.png/70px-WaterIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/a/a5/GrassIC.png/70px-GrassIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/e/ea/ElectricIC.png/70px-ElectricIC.png',
        'https://cdn2.bulbagarden.net/upload/thumb/f/f8/PsychicIC.png/70px-PsychicIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/8/86/IceIC.png/70px-IceIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/c/c3/DragonIC.png/70px-DragonIC.png',
        'https://cdn2.bulbagarden.net/upload/thumb/e/e3/DarkIC.png/70px-DarkIC.png',
         'https://cdn2.bulbagarden.net/upload/thumb/3/31/FairyIC.png/70px-FairyIC.png',
    ]
    name = name[0].toUpperCase() + name.slice(1);
    const url = icons.find(e => e.includes(name));
    return url;
}