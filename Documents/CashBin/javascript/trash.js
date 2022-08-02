//TRASH PAGE



let input = document.getElementsByClassName('num');
let plastic = document.getElementsByClassName('numberSpan');

function Display()
{
    var enter = input.value;
    localStorage.setItem("className", enter);

    return false;
}

plastic.innerText = localStorage.getItem("className")