class SmartCalculator {
    constructor(initialValue) {
        this.result = initialValue;
    }

    add(number) {
        this.result += " + " + number;
        return this;
    }

    subtract(number) {
        this.result += " - " + number;
        return this;
    }

    multiply(number) {
        this.result += " * " + number;
        return this;
    }

    devide(number) {
        this.result += " / " + number;
        return this;
    }

    pow(number) {
        this.result += "**" + number;
        return this;
    }

    valueOf() {
        return eval(this.result);
    }
}

module.exports = SmartCalculator;
