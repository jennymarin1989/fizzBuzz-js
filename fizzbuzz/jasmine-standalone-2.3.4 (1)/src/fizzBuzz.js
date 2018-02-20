var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

FizzBuzz.prototype.output = function(number) {
  if (this.isDivisibleBy(number, 15)) {
    return 'FizzBuzz';
  } else if (this.isDivisibleBy(number, 3)) {
    return 'Fizz';
  } else if (this.isDivisibleBy(number, 5)) {
    return 'Buzz';
  }
  return number;
};

FizzBuzz.prototype.print = function(number) {
  for (var i = 1; i <= number; i++) {
    console.log(this.output(i));
  }
};
