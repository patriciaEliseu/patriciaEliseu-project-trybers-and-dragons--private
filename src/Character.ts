import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints / 2;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  private set lifePoints(value: number) {
    this._lifePoints = value;
  }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this.defense;
    damage = damage > 0 ? damage : 1;
    const updatedPoints = this.lifePoints - damage;
    this.lifePoints = updatedPoints > 0 ? updatedPoints : -1;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;

    const newMax = this._maxLifePoints + getRandomInt(1, 10);
    const newValue = this.race.maxLifePoints;
    this._maxLifePoints = newMax > newValue ? newValue : newMax;
    this._lifePoints = this._maxLifePoints;
  }
}