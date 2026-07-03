// using Tag Name  :
// 1) header
// 2) main 
// 3) footer
// 4) Li (Contact)

console.log(document.getElementsByTagName("header"));
console.log(document.getElementsByTagName("main"));
console.log(document.getElementsByTagName("footer"));
console.log(document.getElementsByTagName("Li")[2]);

// using class Name : 
// 1) main.container

console.log(document.getElementsByClassName("container"));

/*
using id : 
1) main.container   
        - home  
        - about
        - contact
*/

console.log(document.getElementById("home"));
console.log(document.getElementById("about"));
console.log(document.getElementById("contact"));

/*
style Tag : 
    tag/class/id
*/

console.log(document.getElementsByTagName("style"));