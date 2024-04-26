export default class Building {
  constructor() {
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
