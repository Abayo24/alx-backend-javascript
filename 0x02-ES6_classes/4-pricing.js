/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(pricingAmount) {
    this._amount = pricingAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(pricingCurrency) {
    this._currency = pricingCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
