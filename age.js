var ageCalculator = function(name, yearOfBirth, currentYear) {
  return (name + " is " + (currentYear-yearOfBirth) + " years old.");
  }

  ageCalculator("Suzie", 1984, 2016);
  ageCalculator("Jack", 2004, 2016);
  ageCalculator("Ali", 2016, 2016);

  console.log(ageCalculator("Suzie", 1984, 2016));