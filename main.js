
function updateCaseNumber(className, isIncrease) {
    const caseNumberField = document.getElementById(className);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalNumber(newCaseNumber) {
    const newTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = newTotalPrice;
}

function updatePhoneTotalNumber(newPhoneNumber) {
    const newTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = newTotalPrice;
}

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubtotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub-total', currentSubTotal)

    // calculate tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount)

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById("final-total", finalAmount)
}




document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber("case-num-field", true);
    updateCaseTotalNumber(newCaseNumber);
    calculateSubtotal()
})

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber("case-num-field", false);
    updateCaseTotalNumber(newCaseNumber);
    calculateSubtotal()
})


document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newPhoneNumber = updateCaseNumber("phone-num-field", true);
    updatePhoneTotalNumber(newPhoneNumber);
    calculateSubtotal()

})

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const newPhoneNumber = updateCaseNumber("phone-num-field", false);
    updatePhoneTotalNumber(newPhoneNumber);
    calculateSubtotal()
})