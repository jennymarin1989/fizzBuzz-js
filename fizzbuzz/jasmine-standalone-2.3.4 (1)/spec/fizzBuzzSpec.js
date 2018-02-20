describe('FizzBuzz', function() {


  var fizzbuzz;

  describe('knows when a number is', function() {
    it('divisible by 3', function() {

      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });
    it ('returns false when not divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(1, 3)).toBe(false);
    });
    it ('returns true when divisible by 5', function(){
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });
  });


});
