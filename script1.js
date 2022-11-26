// Questions will be asked
const Questions = [{
    id: 0,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "\< scripting \>", isCorrect: false },
        { text: "\< js \>", isCorrect: false },
        { text: "\< script \>", isCorrect: true },
        { text: "\< javascript \>", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\<p id=\"demo\"\>This is a demonstration.</p>",
    a: [{ text: "document.getElementByName('p').innerHTML = 'Hello World!';", isCorrect: false, isSelected: false },
        { text: "#demo.innerHTML = 'Hello World!';", isCorrect: false },
        { text: "document.getElement('p').innerHTML = 'Hello World!';", isCorrect: false },
        { text: "document.getElementById('demo').innerHTML = 'Hello World!';", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Where is the correct place to insert a JavaScript?",
    a: [{ text: "Both the \<head\> section and the \<body\> section are correct", isCorrect: true },
        { text: "The \<body\> section", isCorrect: false },
        { text: "The \<head\> section", isCorrect: false },
        { text: "You can\'t insert JS", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
    a: [{ text: "<script href=\"xxx.js\">", isCorrect: false},
        { text: "<script src=\"xxx.js\">", isCorrect: true},
        { text: "<script name=\"xxx.js\">", isCorrect: false},
        { text: "<link href=\"xxx.js\">", isCorrect: false}
    ]
},
{
    id: 4,
    q: "The external JavaScript file must contain the <script> tag.",
    a: [{ text: "True", isCorrect: false},
        { text: "False", isCorrect: true},
        { text: "", isCorrect:false},
        { text: "", isCorrect:false}
    ]
},
{
    id: 5,
    q: "How do you write \"Hello World\" in an alert box?",
    a: [{ text: "alertBox(\"Hello World\");", isCorrect: false},
        { text: "msg(\"Hello World\");", isCorrect: false},
        { text: "alert(\"Hello World\");", isCorrect: true},
        { text: "msgBox(\"Hello World\");", isCorrect: false}
    ]
},
{
    id: 6,
    q: "How do you create a function in JavaScript?",
    a: [{ text: "function:myFunction()", isCorrect: false},
        { text: "function = myFunction()", isCorrect: false},
        { text: "function myFunction()", isCorrect: true},
        { text: "", isCorrect:false}
    ]
},
{
    id: 7,
    q: "How do you call a function named \"myFunction\"?",
    a: [{ text: "myFunction()", isCorrect: true},
        { text: "call function myFunction()", isCorrect: false},
        { text: "call myFunction()", isCorrect: false},
        { text: "", isCorrect:false}
    ]
},
{
    id: 8,
    q: "How to write an IF statement in JavaScript?",
    a: [{ text: "if i = 5", isCorrect: false},
        { text: "if i = 5 then", isCorrect: false},
        { text: "if (i == 5)", isCorrect: true},
        { text: "if i == 5 then", isCorrect: false}
    ]
},
{
    id: 9,
    q: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    a: [{ text: "if i =! 5 then", isCorrect: false},
        { text: "if i <> 5", isCorrect: false},
        { text: "if (i != 5)", isCorrect: false},
        { text: "if (i <> 5)", isCorrect: true}
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
let result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

//Hide empty options
let options = document.querySelectorAll(".option");
for (let option of options){
    if (option.innerText == "") {
        option.style.display = "none";
    } else {
        option.style.display = "inline-block";
    }
}

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op1.style.fontWeight = "600";
    op2.style.backgroundColor = "#c7dddf";
    op2.style.fontWeight = "400";
    op3.style.backgroundColor = "#c7dddf";
    op3.style.fontWeight = "400";
    op4.style.backgroundColor = "#c7dddf";
    op4.style.fontWeight = "400";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#c7dddf";
    op1.style.fontWeight = "400";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.fontWeight = "600";
    op3.style.backgroundColor = "#c7dddf";
    op3.style.fontWeight = "400";
    op4.style.backgroundColor = "#c7dddf";
    op4.style.fontWeight = "400";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#c7dddf";
    op1.style.fontWeight = "400";
    op2.style.backgroundColor = "#c7dddf";
    op2.style.fontWeight = "400";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.fontWeight = "600";
    op4.style.backgroundColor = "#c7dddf";
    op4.style.fontWeight = "400";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#c7dddf";
    op1.style.fontWeight = "400";
    op2.style.backgroundColor = "#c7dddf";
    op2.style.fontWeight = "400";
    op3.style.backgroundColor = "#c7dddf";
    op3.style.fontWeight = "400";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.fontWeight = "600";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct!";
        result[0].style.cssText = "background: rgb(70,37,28);background: linear-gradient(20deg, rgba(70,37,28,0.9808298319327731) 13%, rgba(57,124,48,0.9752275910364145) 38%);";
    } else {
        result[0].innerHTML = "Incorrect!";
        result[0].style.cssText = "background: rgb(70,37,28);background: linear-gradient(20deg, rgba(70,37,28,0.9808298319327731) 13%, rgba(164,35,35,0.9752275910364145) 38%);";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];
let id = 0;
console.log("This is id outside the function:", id);

function styleId(id){
    if (id == Questions.length-2) {
        next.style.visibility = "hidden";
        prev.style.visibility = "visible";
    } else if (id == 0) {
        next.style.visibility = "visible";
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
        next.style.visibility = "visible";
    }
    let result = document.getElementsByClassName("result");
    result[0].style.background = "none";
}

next.addEventListener("click", () => {
start = false;
if (id < Questions.length-2) {
    id++;
    iterate(id);
    console.log("This is the id:", id);
    styleId(id)
    
} 
})

prev.addEventListener("click", () => {
    start = false;
    if (id > 0) {
        id--;
        styleId(id)
        iterate(id);
        console.log("This is the id:", id);
    } 
    })


