// input to number convater
function getIdToInputValue(id){
    let value = document.getElementById(id).value;
    let convatValue = parseInt(value);
    return convatValue;
}

// text to number convater
function getIdToTextValue(id){
    let value = document.getElementById(id).innerText;
    let convatValue = parseInt(value);
    return convatValue;
}

// togol
function togol(id, States){
    document.getElementById(id).style.display = States;
}