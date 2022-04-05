
function createCircle(radius, color){

    return {

        radius:radius,
        color: color,
        isVisible : true,
        location:{
            x:1,
            y:2
        },
    
        draw() {
            console.log('I am inside Draw Function')
    
        }
    }
}

let s1 = createCircle(10,'red');
console.log(s1);