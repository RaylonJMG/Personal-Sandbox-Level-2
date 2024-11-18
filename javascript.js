class MyCar {
    color = "red";
    year = 2024;
}

const myCar = {
    color: "red",
    year: 2024,
}

function classVsObject() {
    class MyCar {
        color = "red";
        year = 2024;
    }
    const myCar = {
        color: "red",
        year: 2024,
    }
}

myCar2.color = "white";
myCar3.year = 2025;

function newObject() {
    const myCar = new MyCar();
    const myCar2 = new MyCar();
    const myCar3 = new MyCar();
    display(JSON.strigify(myCar));
    display(JSON.strigify(myCar2));
    display(JSON.strigify(myCar3));
}


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

function myFunction(myParameter) {
    display(myParameter)
}

function myFunction(resolve) {
    setTimeout(serverResponse2, 5000);
    display("Inside my myFunction");
}

function serverResponse2() {
    display("Form was successfully processed.");
    resolve();
}

function makePromise() {
    const promise = new Promise(myFunction);
    promise.then(getMessage);
    display("Made a Promise.");
}

function getMessage(myParameter) {
    display(myParameter);
    resolve("Secret Message...");
}

function activatorTest(myParameter) {
    display(myParameter);
}

//FUNCTION WITHIN ANOTHER FUNCTION
function outerFunction() {
    const message = "Message from the outer function";
    innerFunction();

    function innerFunction() {
        display(message);
    }
}

//PROMISE FUNCTION
function makeRequest("https://myserver.com") {
    const promise = new Promise(getServerResponse);
    return promise;
}

//HANDLER FUNCTIONS
function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting form for" + email + "...");
    const promise = new Promise(getServerResponse);
    setTimeout(serverResponse, 5000);
}

//SERVER SIMULATION
function getServerResponse(resolve){
    setTimeout(activateResolve, 5000);

    function activateResolve(){
        debugger;
        //SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
        const response = { 
            message: "Successfully processed.",
        };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
    }
}

//PARSE
function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting form for" + email + "...");
    const promise = makeRequest("https://myserver.com");
    promise.then(parseResponse);
}

function parseResponse(resolveValue){
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(resolveValue);
}

