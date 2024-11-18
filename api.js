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
//TEXT METHOD
function parseResponse(resolveValue){
    //THE RESOLVE VALUES WILL BE A FETCH OBJECT
    //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
    const promise = resolveValue.text();
    promise.then(viewResponse);
}
//PARSE METHOD
function viewResponse(resolveValue){
    //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
    //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
    const response = JSON.parse(resolveValue);
    const results = response.results;
    const item = results[0];
    const question = item.question;
    const answer = item.correct_answer;
    const incorrects = item.incorrect_answers;
}
//TRIVIA GAME TEMPLATE
function viewResponse(resolveValue){
    //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
    //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
    const response = JSON.parse(resolveValue);
    const results = response.results;
    const item = results[0];
    const question = item.question;
    const answer = item.correct_answer;
    const incorrects = item.incorrect_answers;

    const trivia = `<div>${question}</div>
    <ol type="a">
    <li>${incorrects[0]}</li>
    <li>${incorrects[1]}</li>
    <li>${incorrects[2]}</li>
    <li>${answer}</li>
    </ol>`;
    output(trivia);
}

function handleQuoteOfTheDay(){
    debugger;
    const proxy = "https://thingproxy.freeboard.io/fetch/";
    const baseURL = "https://favqs.com/api";
    const endPoint = "/qotd";
    const URL = (proxy + baseURL + endPoint);
    const promise = fetch(URL);
    promise.then(extractResponse);
}
    
//creates stringified objects
function extractResponse(resolveValue){
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}

function parseQotdResponse(resolveValue){
    debugger;
    const response = JSON.parse();
}