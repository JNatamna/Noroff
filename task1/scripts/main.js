let imgIndex = 0;
let currentValue = 0;
let currentLoan = 0;
let wantedLoan = 0;
let bankValue = 0;
let laptopData = {};

function work(){
    currentValue += 100;
    currentValueP.innerText = currentValue+" kr";
}

function payLoan(){
    if(currentLoan >= currentValue){
        currentLoan -= currentValue;
    }
    else{
        let temp = currentLoan -= currentValue;
        currentLoan = 0;
        bankValue += Math.abs(temp);
    }

    if(currentLoan == 0){
        payLoanBtn.style.display = "none";
    }
    currentValue = 0;
    bankValueP.innerText = bankValue+ " kr";
    debtValueP.innerText = currentLoan+ " kr";
    currentValueP.innerText = currentValue+" kr";
}

function bankMoney(){
    if(currentLoan > 0){
        currentLoan -= currentValue*0.1;
        bankValue += currentValue*0.9;
    }
    else{
        bankValue += currentValue;
    }

    bankValueP.innerText = bankValue+ " kr";
    debtValueP.innerText = currentLoan+ " kr";
    currentValue = 0;
    currentValueP.innerText = currentValue+" kr";
}

function getLoan(){
    wantedLoan = prompt("How much would you like to loan?");
    wantedLoan = parseInt(wantedLoan);

    if(allowLoan()){
        bankValue += wantedLoan;
        currentLoan += wantedLoan;
        bankValueP.innerText = bankValue+ " kr";
        debtValueP.innerText = currentLoan+ " kr";
        payLoanBtn.style.display = "inline";
    }
}

let allowLoan = function(){
    if(isNaN(wantedLoan)){
        alert("Not a number");
        return false;
    }
    else{
        if(wantedLoan > bankValue*2 || currentLoan > 0){
            alert("You already have an existing loan, or the loan you seek is too high");
            return false;
        }
        else{
            return true;
        }
    }
}

function updateLaptopValues(){
    featureP.innerText = laptopData[_select.selectedIndex-1].specs;
    lapDesc.firstElementChild.innerText = laptopData[_select.selectedIndex-1].title;
    lapDesc.lastElementChild.innerText = laptopData[_select.selectedIndex-1].description;
    lapPris.innerText = laptopData[_select.selectedIndex-1].price;
    lapImg.src = "https://hickory-quilled-actress.glitch.me/"+laptopData[_select.selectedIndex-1].image;
}

function imgComplete(){
    imgIndex = 0;
}

function imgFailed(){
    let imgTypes = ["gif", "png", "jpg"];
    //lapImg.src =  lapImg.src.replace(imgTypes[imgIndex],"png"); //replace works for this one instance, but what if img src does not end with png?
    let tempSrc = lapImg.src.substring(0, lapImg.src.lastIndexOf(".")+1); //more versatile, works for more instances
    tempSrc += imgTypes[imgIndex];
    lapImg.src = tempSrc;
    imgIndex++;
}

function buyLaptop(){
    if(bankValue >= laptopData[_select.selectedIndex-1].price){
        bankValue -= laptopData[_select.selectedIndex-1].price;
        bankValueP.innerText = bankValue;
        alert("Purchase succesful");
    }
    else{
        alert("Ur too poor dawg");
    }
}