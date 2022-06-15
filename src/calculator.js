class CalcPrint {
  constructor() {
    this.calculation = new Calaculator();
  }

  printAns() {
    console.log(this.calculation.answer);
    return this;
  }
}

class Calaculator {
  constructor() {
    this.answer;
  }

  add(a, b) {
    this.answer = a + b;
    return this;
  }

  subtract(a, b) {
    this.answer = a - b;
    return this;
  }

  multiply(a, b) {
    this.answer = a * b;
    return this;
  }

  divide(a, b) {
    this.answer = a / b;
    return this;
  }
}

const calcPrint = new CalcPrint();
calcPrint.calculation.divide(2, 4);
calcPrint.printAns();
