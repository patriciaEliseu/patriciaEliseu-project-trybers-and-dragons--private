import Race from './Race';

export default class Dwarf extends Race {
  static RacesInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.RacesInstances;
  }
}