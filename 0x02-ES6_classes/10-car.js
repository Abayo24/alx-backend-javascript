/* eslint-disable no-underscore-dangle */
const cloneSymbol = Symbol('createNewObject');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
