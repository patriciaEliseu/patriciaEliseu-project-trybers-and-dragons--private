import { EnergyType } from '../Energy';

export default abstract class Archetype {
  static ArchetypeInstances = 0;

  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {
    Archetype.ArchetypeInstances += 1;
  }

  get name():string {
    return this._name;
  }
  
  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); 
  }

  abstract get energyType(): EnergyType;
}