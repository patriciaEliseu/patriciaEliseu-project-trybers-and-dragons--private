Class Race {
  private _name: string;
  private _dexterity: number;

  constructor( name: string, dexterity: number) {
    static Race.createdRacesInstances();
    
    this._name = name;
    this._dexterity = dexterity;
}
get name(): string {
  return this.__name;
}

get dexterity(): number {
  return this._dexterity;
}
}
export default { Class };
