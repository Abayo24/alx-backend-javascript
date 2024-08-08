/* eslint-disable no-this-before-super */
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency.name, currency.code);
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(pricingCurrency) {
    this.currency = pricingCurrency;
  }

  get amount() {
    return this._amount;
  }

  set amount(pricingAmount) {
    this._amount = pricingAmount;
  }

  displayFullPrice() {
    return `${this._amount} ${this.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
