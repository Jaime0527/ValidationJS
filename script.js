
document.getElementById("Accept").addEventListener("click", ClickAccept);

var input = document.getElementById("Input");
Input.addEventListener("input", EventPressKey);


function ClickAccept() {

    var textInput = input.value;

    if (textInput.trim().length > 0) {

        if (TrueMessageExits() == false) {
            CreateTrueMessage(textInput);
        }

    }

    else {

        if (WarningMessageExits() == false) {
            CreateWarningMessage();
        }

    }

}

function HideWarning() {

    var WarningMessage = document.getElementById("WarningMessage");
    document.getElementById("container").removeChild(WarningMessage);

}

function CreateWarningMessage() {

    var WarningMessage = document.createElement("h3");

    WarningMessage.textContent = "Empty input, make sure to fill it";
    WarningMessage.setAttribute("id", "WarningMessage");
    WarningMessage.setAttribute("class","btn red");

    document.getElementById("container").appendChild(WarningMessage);

}

function HideTrueMessage() {

    var TrueMessage = document.getElementById("TrueMessage");

    document.getElementById("container").removeChild(TrueMessage);
}

function CreateTrueMessage(texto) {

    var TrueMessage = document.createElement("h3");

    TrueMessage.textContent = "Value: " + texto;
    TrueMessage.setAttribute("id", "TrueMessage");
    TrueMessage.setAttribute("class","btn green");

    document.getElementById("container").appendChild(TrueMessage);

}

function EventPressKey() {

    if (WarningMessageExits()) {
        HideWarning();

    }
    else if (TrueMessageExits()) {
        HideTrueMessage();
    }
}


function WarningMessageExits() {

    var WarningMessage = document.getElementById("WarningMessage");
    return document.getElementById("container").contains(WarningMessage);

}

function TrueMessageExits() {

    var TrueMessage = document.getElementById("TrueMessage");
    return document.getElementById("container").contains(TrueMessage);
}

