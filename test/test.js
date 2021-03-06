const calculator = require('../src');

describe('SUM Tests', () => {
  test('should return 10', (done) => {
    expect(calculator.sum(5, 10)).toBe(15);
    done();
  });
});

describe('SUBTRACT Tests', () => {
  test('should return 0', (done) => {
    expect(calculator.subtract(5, 5)).toBe(0);
    done();
  });
});

describe('MULTIPLY Tests', () => {
  test('should return 0', (done) => {
    expect(calculator.multiply(5, 5)).toBe(25);
    done();
  });
});

describe('DIVIDE Tests', () => {
  test('should return 2', (done) => {
    expect(calculator.divide(10, 5)).toBe(2);
    done();
  });
});

describe('POW Tests', () => {
  test('should return 4', (done) => {
    expect(calculator.pow(2, 2)).toBe(4);
    done();
  });
});
