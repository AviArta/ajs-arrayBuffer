/* eslint-disable no-undef */
 
import Magician from "../models/Magican";
import {jest} from '@jest/globals';

jest.useFakeTimers();

test("check create object Magician", () => {
  const expectedValue = {changeAttack: 10,
                    defence: 40,
                    health: 100,
                    interval: 1,
                    level: 1,
                    name: "Mag",
                    stone: false,
                    type: "Magician",
  }, magican = new Magician("Mag", false, 1);
  expect(magican).toEqual(expectedValue);
});

test('Проверка силы атаки без "дурмана"', () => {
  const magican = new Magician("Mag", false, 2);
  magican.attack = 100;
  expect(magican.attack).toBe(90);
});

test('Проверка силы атаки c "дурманои"', () => {
const magican = new Magician("Mag", true, 2);
magican.attack = 100;
expect(magican.attack).toBe(85);
});

test('Проверка силы атаки ', () => {
const magican = new Magician("Mag", true, 2);
magican.attack = 0;
expect(magican.attack).toBe(0);
});
