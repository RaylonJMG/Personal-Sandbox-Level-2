function myProcessForm(event) {
    event.preventDefault(); //prevents the page from refreshing
    const form = event.target;
    const passwordInput = form[0];
    const firstNameInput = form[1];
    const lastnameInput = form[2];
    const firstName = firstnameInput.value;
    output(`Your password is ${firstName}.<br>`);
}

function processForm123(event) {
    document.write("Form processed");
}

function processForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form;
    const value = input.value;
    output("Your appointment has been scheduled!");
}