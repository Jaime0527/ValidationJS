
/**
 * Program that verifies if you have entered a character string 
 * 
 * @author  Jaime Perez
 * @version 1.0
 * @since   23-07-2020
 * 
 * */


document.getElementById("Accept").addEventListener("click", ClickAccept);

var input = document.getElementById("Input");
Input.addEventListener("input", ChangeValueInput);

/**
 * This method is activated when pressing on the button "Accept"
 */

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

/**
 * This method is used when wanting to hide the warning message
 */

function HideWarning() {

    var WarningMessage = document.getElementById("WarningMessage");
    document.getElementById("container").removeChild(WarningMessage);

}

/**
 * This method is used to create the warning message
 */

function CreateWarningMessage() {

    var WarningMessage = document.createElement("h3");

    WarningMessage.textContent = "Empty input, make sure to fill it";
    WarningMessage.setAttribute("id", "WarningMessage");
    WarningMessage.setAttribute("class","btn red");

    document.getElementById("container").appendChild(WarningMessage);

}

/**
 * This method is used to hide the message that appears when you enter a correct message
 */

function HideTrueMessage() {

    var TrueMessage = document.getElementById("TrueMessage");

    document.getElementById("container").removeChild(TrueMessage);
}

/**
 * This method is used to created the true message
 */

function CreateTrueMessage(texto) {

    var TrueMessage = document.createElement("h3");

    TrueMessage.textContent = "Value: " + texto;
    TrueMessage.setAttribute("id", "TrueMessage");
    TrueMessage.setAttribute("class","btn green");

    document.getElementById("container").appendChild(TrueMessage);

}

/**
 * This method is used when the user changes the input value
 */

function ChangeValueInput() {

    if (WarningMessageExits()) {
        HideWarning();

    }
    else if (TrueMessageExits()) {
        HideTrueMessage();
    }
}

/**
 * This method is used to verify if the warning message exits
 * @return boolean This returns true if the element exits and false if doesn't exits
 */

function WarningMessageExits() {

    var WarningMessage = document.getElementById("WarningMessage");
    return document.getElementById("container").contains(WarningMessage);

}

/**
 * This method is used to verify if the true message exits
 * @return boolean This returns true if the element exits and false if doesn't exits
 */

function TrueMessageExits() {

    var TrueMessage = document.getElementById("TrueMessage");
    return document.getElementById("container").contains(TrueMessage);
}

