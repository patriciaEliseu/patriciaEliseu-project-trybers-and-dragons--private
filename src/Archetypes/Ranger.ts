import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static ArchetypeInstances = 0;

  constructor(
    name: string,
    public energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger.ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.ArchetypeInstances;
  }
}