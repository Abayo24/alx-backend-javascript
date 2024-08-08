/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(currencyName) {
    this._name = currencyName;
  }

  get code() {
    return this._code;
  }

  set code(currencyCode) {
    this._code = currencyCode;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
