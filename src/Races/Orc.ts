import Race from './Race';

export default class Orc extends Race {
  static RacesInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.RacesInstances;
  }
}