
//DASHBOARD PAGE
let bagTrash = parseInt(document.querySelector('#bags').outerText);     //No of waste bag trashed
let accountBal = parseInt(document.querySelector('#acct').outerText);    //Account Balance of client


//TRASH PAGE
let numPlastic = parseInt(document.getElementsByClassName('numberSpan').outerText);  //No of waste bags ready to be trashed as written by the client on the form.
let earnAmount = parseInt(document.getElementsByClassName('earnSpan').outerText); //amount of expected earnings

alert(numPlastic + earnAmount);