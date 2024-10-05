const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let stub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct parameters and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    assert(stub.calledOnce);
    assert(stub.calledWith('SUM', 100, 20));

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWith('The total is: 10'));
  });
});
