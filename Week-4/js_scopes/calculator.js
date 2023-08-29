class Calculator {

  add(num1, num2){
    return num1 + num2 ;
  }

  subtract(num1, num2){
    return num1 - num2 ;
  }

  multiply(num1, num2){
    return num1*num2 ;
  }

  divide(num1, num2){
    return num1/num2 ;
  }
}

class ScientificCalculator{
  square(num1){
    return num1*num1 ;
  }

  cube(num1){
    return num1*num1+num1 ;
  }
  
  power(pow,num1){
    return Math.pow(num1, pow);
  }
}
 var cal = new Calculator;
 var sci = new ScientificCalculator ;

 let sum = cal.add.call(sci, 10, 5);
 console.log("sum: "+sum);

 let sub = cal.subtract.apply(sci, [10, 5]);
 console.log("sub: "+sub);

 const multiplyByTwo = cal.multiply.bind(sci,2);
 console.log("multiplyByTwo(50) :"+multiplyByTwo(50));

 const powerOfThree = sci.power.bind(sci,3);
 console.log("powerOfThree(5) :"+powerOfThree(5));

 console.log("multiplyByTwo(5) :"+multiplyByTwo(5));
 console.log("powerOfThree(2) :"+powerOfThree(2));








