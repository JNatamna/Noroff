//Balance Joe has on him
let currentValue = 0;

//Balance Joe has in the bank
let bankValue = 0;
let currentLoan = 0;

let wantedLoan = 0;

let bankValueP = document.getElementById("bankValueP");
let debtValueP = document.getElementById("debtValueP");
let currentValueP = document.getElementById("pay");

function work(){
    currentValue += 100;
    currentValueP.innerText = currentValue;
}

function bankMoney(){
    if(currentLoan > 0){
        currentLoan -= currentValue*0.1;
        bankValue += currentValue*0.9;
    }
    else{
        bankValue += currentValue;
    }

    bankValueP.innerText = bankValue;
    currentValue = 0;
    currentValueP.innerText = "0 kr";
}

function getLoan(){
    wantedLoan = prompt("How much would you like to loan?");
    wantedLoan = parseInt(wantedLoan);


    if(allowLoan()){
        console.log(typeof bankValue);
        console.log(typeof wantedLoan);
        bankValue += wantedLoan;
        currentLoan += wantedLoan;
        bankValueP.innerText = bankValue;
        debtValueP.innerText = currentLoan;
    }
    else{
        alert("no good");
    }
}

let allowLoan = function(){
console.log((wantedLoan <= bankValue*2 || currentLoan <= 0));
    if(isNaN(wantedLoan)){
        return false;
    }
    else{
        if(wantedLoan >= bankValue*2 || currentLoan >= 0){
            return false;
        }
        else{
            console.log("her går det fint å låne");
            return true;
        }
    }
}
