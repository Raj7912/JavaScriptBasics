
function Person(fName, sName){

    this.fName=fName;
    this.sName=sName;

    Person.prototype["display"]=function(){
      return "Full Name : "+this.fName+this.sName;
    
}}

let s1 = new Person('Mahesh','waran');
let s2 = new Person('Siva','ranjini');
console.log(s1);
console.log(s1.display());
console.log(s2.display());

