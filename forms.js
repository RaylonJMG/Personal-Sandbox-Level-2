function myProcessForm(event) {
    debugger;
    event.preventDefault(); //prevents the page from refreshing
    const form = event.target;
    const passwordInput = form[0];
    const firstnameInput = form[1];
    const lastnameInput = form[2];
    const firstname = firstnameInput.value;
    output(`Your password si ${firstname}.<br>`);
}