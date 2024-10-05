const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when SUM and 1.4 and 4.5 are passed', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when SUM and 1.2 and 3.3 are passed', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.3), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when SUBTRACT and 1.4 and 4.5 are passed', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when SUBTRACT and 3.5 and 3.5 are passed', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when DIVIDE and 1.4 and 4.5 are passed', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when DIVIDE and 1.4 and 0 are passed', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when DIVIDE and 2.5 and 2 are passed', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2), 1);
    });
  });

  describe('Edge Cases', () => {
    it('should return Error when DIVIDE and 0 and 0 are passed', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('should return -1 when SUBTRACT and -1.5 and 0.5 are passed', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 0.5), -2);
    });
  });
});
