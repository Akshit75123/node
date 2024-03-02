//video-13 (module caching)

class SuperHero {
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name;
    }
}

module.exports = SuperHero
//export class in place of function for avoiding module caching