const sum = (num1, num2) => {
    return num1 + num2;
  }
  
  const person = {
    age: 25,
    gender: "Male",
    height: 1.77,
    weight: 80,
    email: "abc@gmail.com",
    address: "ABC street London",
    calculateBMI: function () {
      const BMI = this.weight / Math.pow(this.height, 2);
      return BMI;
    },
  };
  
  module.exports = { sum, person };