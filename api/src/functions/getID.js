const {Type} = require('../db')

module.exports = async dato => {
    let arr = [];
    for(let i=0;i<dato.length;i++){
        arr.push(await Type.findOne({
            where:{name:dato[i]},
            attributes:["id"]
        }))
    }
    return arr;
}