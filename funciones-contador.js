let starValue = 0;
let disabledBtn = document.getElementById("disabledBtn");


function addValueFunction(valuePar) {
    document.getElementById("amount").value;

    if(valuePar.value == 'increase'){
        starValue++;
    }
    else if(valuePar.value == 'reset') {
        starValue = 0
    } 
    else{
        starValue--;
    }
    document.getElementById("amount").textContent = starValue;

}