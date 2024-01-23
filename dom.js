let array = [];
increment = 0;
let container = document.querySelector('.container');

//fast

while(increment < 1000 ){
    array.push(++increment);
}
container.innerHTML=array.join(' ');

//slow

while(increment < 1000){
    increment++;
    container.innerHTML += ' '+ increment
}