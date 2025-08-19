const Fada = require("./classe/Fada");
const Dragao = require("./classe/Dragao");
const Gnomo = require("./classe/Gnomo");
const Mago = require("./classe/Mago"); 


const fada = new Fada("Tinker");
const dragao = new Dragao("Dragao Infernal");
const gnomo = new Gnomo("Goblin");
const mago = new Mago("Mago de Fogo");

console.log(" Criaturas em ação ");

fada.agir();
gnomo.agir();
dragao.agir();
mago.agir();

console.log(" Criaturas descansando");

fada.descansar();
gnomo.descansar();
dragao.descansar();
mago.descansar();



