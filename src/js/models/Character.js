/* eslint-disable max-statements */
export default class Character {
    constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
        throw new Error("Имя должно быть от 2 до 10 символов.");}

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
        throw new Error("Такого типа персонажа нет.");}
        
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    }

    set attack(value) {
        this.changeAttack = value;
      }
  
    get attack() {
    this.changeAttack -= this.changeAttack * ((this.interval - 1) / 10);
    if (this.stone) {
        this.changeAttack -= Math.log2(this.interval) * 5;
    }
    this.attack = this.changeAttack;
    if (this.changeAttack < 0) {
        this.changeAttack = 0;
    }
    return Math.floor(this.changeAttack);
    }
}
    