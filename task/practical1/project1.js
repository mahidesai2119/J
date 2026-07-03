// TASK 1

let studentName = prompt("TASK 1\nenter your name :- ");
const ColleageName = prompt("Enter your colleage name :- ")
var Age = prompt("Enter your age :- ");

console.log(studentName);
console.log(ColleageName);
console.log(Age);

// TASK 2

let city = "rajkot";

city = "ahemdabad";

console.log(city);

// TASK 3

// const country = "India";
// country = "France";

// console.log(country);


// TASK 4

var a = 25;
var b = 10;

console.log("addition :- " , a + b);
console.log("subtraction :- " , a - b);
console.log("multiplication :- " , a * b);
console.log("divison :- " , a / b);

// TASK 5

var count = 5;

console.log("Original value :- ",count)

count++;
console.log("After ++ :-" , count);
count--;
console.log("After -- :-" , count);

// TASK 6

var marks = 50;
var temp = 5;

console.log("Original value :- ",marks);
console.log("Operational value :- ",temp);

marks += temp;
console.log("After += :- " , marks);
var marks = 50;


marks = marks-temp;
console.log("After -= :- " , marks);
var marks = 50;


marks *= temp;
console.log("After *= :- " , marks);
var marks = 50;


marks = marks/temp;
console.log("After /= :- " , marks);

// TASK 7

var salary =10000;
var Increment =2000;

console.log("Before Increment Salary :-" , salary);

salary+=Increment;

console.log("After Increment Salary :-" , salary);

// TASK 8

var x = 20;
var y = 30;

console.log("x :-" , x);
console.log("y :-" , y);

console.log("x == y :-" , x == y);
console.log("x != y :-" , x != y);
console.log("x > y :-" , x > y);
console.log("x < y :-" , x < y);
console.log("x >= y :-" , x >= y);
console.log("x <= y :-" , x <= y);

// TASK 9

var num1 = '10';
var num2 = 10;

console.log("num1 =" , typeof num1 ,num1);
console.log("num2 =" , typeof num2 ,num2);

console.log("num1 == num2 :-" , num1 == num2);
console.log("num1 === num2 :-" , num1 === num2);

// TASK 10

var age = 22;
var hasLicence = true;

if(age>18 && hasLicence == true){
    console.log("person can drive");
}
else{
    console.log("person is not eligible to drive");
}

// TASK 11

var isWeekend = false;
var isHoliday = true;

if(isWeekend == false || isHoliday == true){
    console.log("office is closed");
}
else{
    console.log("office is open");
}

// TASK 12

var loggedin = false;

console.log(" use of ! :-" , !(loggedin));

// TASK 13

console.log("this is use of console.log");
console.warn("this is use of console.warn");
console.error("this is use of console.error");

// TASK 14

console.time('test');

for (let i = 1; i >= 100000; i++) {

}

console.timeEnd('test');

// TASK 15

console.table(['Mahi','Hir','Pushti','Niti','Diya']);

// TASK 16

// console.clear(); 


// TASK 17

console.log(document.getElementById("H1"));

// TASK 18

console.log(document.getElementsByClassName("p1")[0]);
console.log(document.getElementsByClassName("p1")[1]);
console.log(document.getElementsByClassName("p1")[2]);

// TASK 19

console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByTagName("li")[1]);
console.log(document.getElementsByTagName("li")[2]);
console.log(document.getElementsByTagName("li")[3]);
console.log(document.getElementsByTagName("li")[4]);

// TASK 20

console.log(document.querySelector('#title').innerHTML);
console.log(document.querySelector('#main').innerText);
console.log(document.querySelector('#footer').textContent);

document.querySelector('#title').innerHTML = "updated with innerHtml";
document.querySelector('#main').innerText = "updated with innerText";
document.querySelector('#footer').textContent = "updated with textContent";

console.log(document.querySelectorAll('li')[0]);

console.log(9 , typeof 9);
console.log(9 ,typeof "9");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);