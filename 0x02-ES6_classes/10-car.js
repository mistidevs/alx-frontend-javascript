export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const constructor = this.constructor;
    const instance = new constructor(undefined, undefined, undefined);
    return instance;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
