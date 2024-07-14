import Character from "./Character";

export default class Magician extends Character {
    constructor(name, stone, interval) {
        super(name, "Magician");
        this.attack = 10;
        this.defence = 40;
        this.stone = stone;
        this.interval = interval;
    };
}
