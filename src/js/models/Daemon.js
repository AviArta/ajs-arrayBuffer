import Character from "./Character";

export default class Daemon extends Character {
    constructor(name, stone, interval) {
        super(name, "Daemon");
        this.attack = 10;
        this.defence = 40;
        this.stone = stone;
        this.interval = interval;
    };
}
