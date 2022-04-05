for(let i=0; i<10 ; i++){

   // console.log(i);
}

let i=1;

while(i<5){
    //console.log(i);
    i++;
}

let j=1;
do{

   // console.log(j);
    j++;
}while(j<5)

const customer = {

    userName: 'Mahesh',
    accountNum: 1234
}

for(let key in customer){
    console.log(key, customer[key]);
}

const color = ['red','green','blue'];
for(let key of color){
    console.log(key);
}