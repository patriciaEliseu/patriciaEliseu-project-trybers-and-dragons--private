import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static ArchetypeInstances = 0;

  constructor(
    name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.ArchetypeInstances;
  }
}