function convert() {
    let input = document.querySelector("#input").value;
    let output = document.getElementById("output");
    let valueInt = parseInt(input);
    var answer;
    if(!input) {
        alert("Please Enter the Values");
        document.getElementById("input").focus();  
    }

    //Getting value of InputMenu Field
    let menuElement = document.getElementById("inputMenu");
    var i = menuElement.selectedIndex;
    let inSelectedValue = menuElement.options[i].value;

    //Getting Value of Output Menu Field
    let outMenuElement = document.getElementById("outputMenu");
    var i = outMenuElement.selectedIndex;
    let outSelectedValue = outMenuElement.options[i].value;

        if(inSelectedValue === 'c' && outSelectedValue === 'c' || inSelectedValue === 'f' && outSelectedValue === 'f' || inSelectedValue === 'k' && outSelectedValue === 'k') {
            answer = valueInt;
        }
        if(inSelectedValue === 'c' && outSelectedValue === 'f') {
            answer = (valueInt*1.80000)+32.00;
        }
        if(inSelectedValue === 'f' && outSelectedValue === 'c') {
            answer = (5/9)*(valueInt-32);
        }
        if(inSelectedValue === 'k' && outSelectedValue === 'c') {
            answer = valueInt - 273.15;
        }
        if(inSelectedValue === 'c' && outSelectedValue === 'k') {
            answer = valueInt + 273.15;
        }
        if(inSelectedValue === 'f' && outSelectedValue === 'k') {
            answer = (5/9)*(valueInt-32) + 273.15;
        }
        if(inSelectedValue === 'k' && outSelectedValue === 'f') {
            answer = ((valueInt - 273.15)*1.80000)+32.00;
        }
    if(input && outSelectedValue !== 'k') {output.innerText = answer.toFixed(2)+" °"+outSelectedValue.toUpperCase();}
    if(input && outSelectedValue === 'k') {output.innerText = answer.toFixed(2)+" "+outSelectedValue.toUpperCase();}
}

function resetForm() {
    document.getElementById("output").innerText = "00.00";
    document.querySelector("#input").value = "00.00";
    var resetInput = document.querySelector("#inputMenu");
    resetInput.value = "c";
    var resetOutput = document.querySelector("#outputMenu");
    resetOutput.value = "c";
}


