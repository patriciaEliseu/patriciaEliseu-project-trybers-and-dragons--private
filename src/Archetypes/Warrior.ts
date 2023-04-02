import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static ArchetypeInstances = 0;

  constructor(
    name: string,
    public energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.ArchetypeInstances;
  }
}