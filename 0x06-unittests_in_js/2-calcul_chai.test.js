const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  // Test suite for SUM
  describe('SUM', () => {
    it('should return 6 for calculateNumber(SUM, 1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 4 for calculateNumber(SUM, 1.2, 3.3)', () => {
      expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
    });
  });

  // Test suite for SUBTRACT
  describe('SUBTRACT', () => {
    it('should return -4 for calculateNumber(SUBTRACT, 1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 for calculateNumber(SUBTRACT, 3.5, 3.5)', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 3.5)).to.equal(0);
    });
  });

  // Test suite for DIVIDE
  describe('DIVIDE', () => {
    it('should return 0.2 for calculateNumber(DIVIDE, 1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" for calculateNumber(DIVIDE, 1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1.5 for calculateNumber(DIVIDE, 2.5, 2)', () => {
      expect(calculateNumber('DIVIDE', 2.5, 2)).to.equal(1.5);
    });

    it('should return "Error" for calculateNumber(DIVIDE, 0, 0)', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});
