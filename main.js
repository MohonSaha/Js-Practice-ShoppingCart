document.getElementById("btn-case-plus").addEventListener("click", function(){
    const caseNumberField = document.getElementById("case-num-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    // console.log(previousCaseNumber);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})