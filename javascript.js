function display(message) {
    document.write(message);
}

function greeting() {
    display("Hello World!");
}

function myFunction(callbackFunction) {
    callbackFunction();
}

function activator() {
    debugger;
    myFunction(greeting);
}

function delayedGreeting() {
    setTimeout(greeting, 5000);
}

function asynchronous() {
    setTimeout(greeting, 5000);
    display("Waiting for the greeting...");
}

function submitForm(event) {
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    document.write("Submitting form for" + email + "...");
    setTimeout(serverResponse, 5000);
}

function serverResponse() {
    display("Form was successfully processed.");
}

function displayObject() {
    const myCar = {
        color: "red",
        year: 2024
    };
}

const result = JSON.stringify(myCar);
display(result);