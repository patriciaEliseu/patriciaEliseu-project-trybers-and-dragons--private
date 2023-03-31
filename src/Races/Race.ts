export default abstract class Race {
  static RacesInstances = 0;

  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Race.RacesInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented'); 
  }

  abstract get maxLifePoints(): number; 
}