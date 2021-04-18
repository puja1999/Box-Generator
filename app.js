//for capturing the response from button

let button = document.getElementById("theBoxes");

//when user clicks the button we gonna call function

button.addEventListener("click", myFunction);

var oldValue = 0;
var i=1;
function myFunction(){
    let n = document.getElementById('number').value;
    //Based on number we need to generate the boxes
    n= parseInt(oldValue)+parseInt(n);
    for(i; i<=n; i++){
        var box=document.createElement('div');

        //add some property in div

        box.classList.add('myDiv'); //myDiv is a class which has few property and we add those property to newly created box


        //append the boxes in container

        document.getElementById('box').appendChild(box);


        //write number inside the box

        box.innerHTML =i;

        //for the last value
        oldValue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldValue);
    }
}