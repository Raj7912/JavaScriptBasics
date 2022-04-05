console.log('Hello World');

let myName ='Mahesh';
console.log(myName);
myName = 'Siva';
console.log(myName);

let age = 30;

typeof age;

console.log(typeof age);
console.log(typeof myName);

let user={
    customerName : 'Siva',
    customerAge : 28
}

console.log(user);

console.log(user.customerAge);
console.log(user.customerName);

console.log(user['customerAge']);
console.log(user['customerName']);

let languages =['Java', 'Ruby',28]

console.log(languages[0]);
console.log(languages[1]);

languages[2]='JavaScript';
languages[1]= 'C#';
languages[3] = 28;
languages[4] = true;
languages[5] = null;
languages[6] = undefined;
console.log(languages);

function sayMyName(){
    console.log('Mahesh')
}

sayMyName();

function add(num1, num2){
    console.log( num1+num2);
}

add(10,20);