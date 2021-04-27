const innerLoadingBarItemEl = document.querySelector('.loading-bar__item');


/* //setintervall built in function js, two args == function, time

let count = 0;
let counter = setInterval(() =>{

    if (count === 10 ){
        //clearinterval takes one argument, id of setinterval 
        clearInterval(counter)
        } else{
            count++;
            console.log(count);

        }



},1000)

 */

// we create our intervall and our millisecons. when the with is 100 it will be full loaded
// and our clearinterval kicks in
let width = 1; 
let laodingBar = setInterval(() =>{
    //width == 100
    if(width >= 100){
        clearInterval(laodingBar)

    } else{
        //
        width++;
        innerLoadingBarItemEl.style.width = width + '%';
    }
}, 20 )