/* eslint-disable no-undef */
 
import Daemon from "../models/Daemon";
import {jest} from '@jest/globals';

jest.useFakeTimers();
 
test("check create object Daemon", () => {
  const daemon = new Daemon("Dan", false, 1),
   expectedValue = {
    changeAttack: 10,
    defence: 40,
    health: 100,
    interval: 1,
    level: 1,
    name: "Dan",
    stone: false,
    type: "Daemon"
  };
  expect(daemon).toEqual(expectedValue);
});

test('Проверка силы атаки без "дурмана"', () => {
    const daemon = new Daemon("Dan", false, 2);
    daemon.attack = 100;
    expect(daemon.attack).toBe(90);
});

test('Проверка силы атаки c "дурманои"', () => {
  const daemon = new Daemon("Dan", true, 2);
  daemon.attack = 100;
  expect(daemon.attack).toBe(85);
});
 
test('Проверка силы атаки ', () => {
  const daemon = new Daemon("Dan", true, 2);
  daemon.attack = 0;
  expect(daemon.attack).toBe(0);
});
