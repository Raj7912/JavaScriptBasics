
function createCircle2(radius){


    this.radius = radius,
    this.isVisible = true,
    this.draw = function(){
        console.log('I am inside draw fuction' + radius);
    }
}

let s1 = new createCircle2(2);

console.log(s1);
s1.draw();