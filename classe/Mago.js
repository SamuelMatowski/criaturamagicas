const Criatura = require ('./Criatura');

class Mago extends Criatura {
    constructor(nome){
        super(nome, "Fire Ball");
    }

    agir(){
        console.log(`${this.nome} conjura ${this.ataqueMagico}!`);
        this.alterarEnergia(-20);
    }
}
module.exports = Mago;