import Character from "../models/Character";
import {jest} from '@jest/globals';

jest.useFakeTimers();
 
test("check create object of class Character", () => {
    const angel = new Character("Angel", "Magician"); 
    let expectedValue = { changeAttack: NaN,
        defence: null,
        health: 100,
        level: 1,
        name: "Angel",
        type: "Magician"};             
    expect(angel).toEqual(expectedValue);
});

test("check create object with uncorrect type", () => {
    expect(() => new Character("Angel", "Angel")).toThrow(Error) ;
});
 
test("check create object with uncorrect length of name", () => {
    expect(() => new Character("AngelAndelAngel", "Undead")).toThrow();
});
