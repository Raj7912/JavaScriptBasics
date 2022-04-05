

let role ='guesMahesht'

switch(role)
{
case 'admin':
    console.log('admin login');
    break;

case 'guest':
    console.log('guest login');
    break;

default :
    console.log('No User');
    break;

}

const circle = {

    radius:1,
    color: 'red',
    isVisible : true,
    location:{
        x:1,
        y:2
    },

    draw: function() {
        console.log('I am inside Draw Function')

    }
}

console.log(circle.radius);
circle.draw();