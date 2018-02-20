var FizzBuzz = function (){};

FizzBuzz.prototype.isDivisibleBy = function(number, divisor){
  return number % divisor === 0;
};
