class Character {
  constructor(name, life, attack, precision) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.precision = precision;
  }
  
  accuracy() {
    let luck = Math.random();
    return luck < this.precision;
  }

  attack_action(ennemy) {
    if (this.accuracy()) {
      console.log(this.name + " attaque " + ennemy.name + " et lui retire " + this.attack + " PV.");
      ennemy.life -= this.attack;
    } else {
      console.log(this.name + " rate son attaque.");
    }
  }
}

let fighter1 = new Character("Ambre", 30, 6, 0.8);
let fighter2 = new Character("Gabinks", 50, 4, 0.7);
let count = 1

console.log("Début du combat !");
while (fighter1.life > 0 && fighter2.life > 0) {
  console.log("");
  console.log("Tour " + count);
  console.log(fighter1.name + ": " + fighter1.life + " PV | " + fighter2.name + ": " + fighter2.life + " PV");
  
  fighter1.attack_action(fighter2);
  
  if (fighter2.life <= 0) {
    console.log("");
    console.log(fighter2.name + " a perdu...");
    console.log(fighter1.name + " remporte le combat !");
    break;
  }
  
  fighter2.attack_action(fighter1);
  
  if (fighter1.life <= 0) {
    console.log("");
    console.log(fighter1.name + " a perdu...");
    console.log(fighter2.name + " remporte le combat !");
    break;
  }
  count++;
}
  
console.log("Fin du combat !");