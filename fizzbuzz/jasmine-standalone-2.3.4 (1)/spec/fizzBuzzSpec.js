describe('FizzBuzz', function() {
  var fizzbuzz;

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });
    it('returns false when not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(1, 3)).toBe(false);
    });
    it('returns true when divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });
  });

  describe('outputs number or fizzbuzz string', function() {
    fizzbuzz = new FizzBuzz();

    it('returns the number back to us', function() {
      expect(fizzbuzz.output(1)).toEqual(1);
    });

    it('returns Fizz when number is divisible by 3', function() {
      expect(fizzbuzz.output(3)).toEqual('Fizz');
    });

    it('returns Buzz when number is divisible by 5', function() {
      expect(fizzbuzz.output(5)).toEqual('Buzz');
    });

    it('returns FizzBuzz when number is divisible by 15', function() {
      expect(fizzbuzz.output(15)).toEqual('FizzBuzz');
    });
  });

  describe('print', function() {
    it('prints numbers up to the numbers passed into it', function() {
      expect(fizzbuzz.print(5)).toEqual(true);
    });
  });
});
