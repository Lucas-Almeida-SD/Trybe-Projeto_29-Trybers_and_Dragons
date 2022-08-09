import Race from './Race';

class Orc extends Race {
  private static instances = 0;

  constructor(
    name: string, 
    dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;