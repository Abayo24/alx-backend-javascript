const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Test suite for SUM
  describe('SUM', () => {
    it('should return 6 for calculateNumber(SUM, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 for calculateNumber(SUM, 1.2, 3.3)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.3), 5);
    });
  });

  // Test suite for SUBTRACT
  describe('SUBTRACT', () => {
    it('should return -4 for calculateNumber(SUBTRACT, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 for calculateNumber(SUBTRACT, 3.5, 3.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
    });
  });

  // Test suite for DIVIDE
  describe('DIVIDE', () => {
    it('should return 0.2 for calculateNumber(DIVIDE, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" for calculateNumber(DIVIDE, 1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 for calculateNumber(DIVIDE, 2.5, 2)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2), 1);
    });

    it('should return "Error" for calculateNumber(DIVIDE, 0, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });
});
