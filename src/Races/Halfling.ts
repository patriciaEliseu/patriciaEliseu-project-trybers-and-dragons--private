import Race from './Race';

export default class Halfling extends Race {
  static RacesInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling.RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.RacesInstances;
  }
}