/* eslint-disable no-unused-vars */
/* eslint-disable constructor-super */
/* eslint-disable no-this-before-super */
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(pricingCurrency) {
    this._currency = pricingCurrency;
  }

  get amount() {
    return this._amount;
  }

  set amount(pricingAmount) {
    this._amount = pricingAmount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name}  ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
