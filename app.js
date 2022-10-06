// starting => establishing my age (evolvable, so i prefer to use LET).
let myAge = 51;

// defining the teens years of oldie doggie.
let earlyYears = 2;
earlyYears *= 10.5;

//verifications
console.log(`J'ai' ${myAge}ans`);
console.log(`earlyYears = ${earlyYears}ans`);

// switching to regular dog's aging rate
let laterYears = myAge - 2;
laterYears *= 4;
console.log(`moins les 2 ans, en chien J'ai' ${laterYears} ans !`);

// defining LATER Years of Doggie
let myAgeInDogYears = laterYears;
console.log(laterYears);

//myAgeInDogYears _ adding early age to latar years to obtain myAgeInDogYears
myAgeInDogYears = (earlyYears + laterYears)
console.log(`myAgeInDogYears ` + myAgeInDogYears);

// myName _ definition of my name as a string
myName = (`Lucas`);
myName.toLowerCase(myName);

// final render
console.log(`My name is ${myName}. I am HUMAN of ${myAge} years old in human years which is  ${myAgeInDogYears} DOG AGE years old in dog years.`)

