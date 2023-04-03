import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  public _lifePoints: number;
  private _strength: number;

  constructor() { 
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    this._lifePoints = value;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const updatedPoints = this.lifePoints - attackPoints;
    this.lifePoints = updatedPoints > 0 ? updatedPoints : -1;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}