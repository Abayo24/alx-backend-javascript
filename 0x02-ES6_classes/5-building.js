/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage() === 'undefined') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
