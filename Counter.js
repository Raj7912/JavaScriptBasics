let x=prompt("Enter a Number");
addition(x);
function addition() {
    let y=x++;
    return y;
}

console.log(addition(x));
//added comment