//1. using innerHTML
console.log(document.querySelector('#heading').innerHTML);

//2. using innerText
console.log(document.querySelector('#paragraph').innerText);

//3. using textContent
console.log(document.querySelector('#content').textContent);


//1. using innerHTML
document.querySelector('#heading').innerHTML = "Welcome to <span>JavaScript DOM</span>";

//2. using innerText
document.querySelector('#paragraph').innerText = "Learning Content Modification in JavaScript";

//3. using textContent
document.querySelector('#content').textContent = "Frontend Development with JavaScript";