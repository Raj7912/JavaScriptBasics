
const person = {

    fName : 'Mahesh',
    sName : 'waran',
}

console.log(person);

person.age=25;
person.city='VPM';
person.fullName = function(){ 
    console.log(this.fName+this.sName);
}

console.log(person);

delete person.age;
console.log(person);
