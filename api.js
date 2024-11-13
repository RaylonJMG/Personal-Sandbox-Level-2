function handleClick(event){
    debugger;
    const promise = fetch("https://opentdb.com/api.php?amount=1");
    promise.then(parseResponse);
}

function parseResponse(resolveValue){
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(message);
}
//text method
function parseResponse(resolveValue){
    const promise = resolveValue.text();
    promise.then(viewResponse);
}
//parse method
function viewResponse(resolveValue){
    const response = JSON.parse(resolveValue);
}