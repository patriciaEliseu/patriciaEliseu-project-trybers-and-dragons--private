export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  private static createdRacesInstances(): number | void {
    throw new Error('Not implemented'); 
  }

  get maxLifePoints(): number { return this.maxLifePoints; }
}