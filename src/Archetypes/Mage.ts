import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static ArchetypeInstances = 0;

  constructor(
    name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage.ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.ArchetypeInstances;
  }
}