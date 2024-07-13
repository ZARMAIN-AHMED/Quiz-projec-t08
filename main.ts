import inquirer from "inquirer";

const quiz : {
    question_1 : string;
    question_2: string;
    question_3 : string,
    question_4 : string,
    question_5 : string,
    question_6: string,
    question_7 : string,
    question_8 : string,
    question_9 : string,
    question_10 : string,
}= await inquirer.prompt([
    {
        name: "question_1",
        type:"list",
        message: "Q1. What keyword is used to declare a constant variable in TypeScript?",
        choices: ["a) var", "b) let", "c) const", "d) static"]
    },{
        name: "question_2",
        type:"list",
        message: "Q2. Which of the following is the correct way to declare a variable in TypeScript that can hold any type of value?",
        choices: ["a) let value: any;", "b) let value: unknown;", "c) let value: anyType;", "d) let value: string | number;" ]
    },{
        name: "question_3",
        type:"list",
        message: "Q3. What is the scope of a variable declared with let? ",
        choices: ["a) Global", "b) Function", "c) Block", "d) Module" ]

    },{
        name: "question_4",
        type:"list",
        message: "Q4. Which TypeScript feature allows specifying the type of a variable?",
        choices: ["a) Type declaration", "b) Type inference", "c) Type assertion", "d) Type checking" ]
    },{
        name: "question_5",
        type:"list",
        message: "Q5. How do you define a variable in TypeScript that can only be assigned once and cannot be reassigned?",
        choices: ["a) var", "b) let", "c) readonly", "d) const" ]
    },{
        name: "question_6",
        type:"list",
        message: "Q6. What is the initial value of an uninitialized variable of type number in TypeScript? ",
        choices: ["a) 0", "b) null", "c) undefined", "d) NaN" ]
    },{
        name: "question_7",
        type:"list",
        message: "Q7. Which of the following is a valid way to declare a variable with an explicit type annotation in TypeScript?",
        choices: ["a) let name: 'John';", "b) let age: 30;", "c) let isDone: boolean = false;", "d) let isDone = boolean: false;" ]
    },{
        name: "question_8",
        type:"list",
        message: "Q8. In TypeScript, what is the correct way to declare a variable that can hold either a string or a number?",
        choices: ["a) let value: string | number;", "b) let value: string, number;", "c) let value: string or number;", "d) let value: string & number;"]

    },{
        name: "question_9",
        type:"list",
        message: "Q9. What keyword allows you to declare a block-scoped variable that can be reassigned in TypeScript?",
        choices: ["a) var", "b) let", "c) const", "d) readonly" ]
    },{
        name: "question_10",
        type:"list",
        message: "Q10. Which of the following correctly infers the type of a variable based on its initial value in TypeScript? ",
        choices: ["a) let count: number = 5;", "b) let count = 5;", "c) let count = '5';", "d) let count: any = 5;" ]
    }
]);

let score : number =0;
switch(quiz.question_1){
    case "c) const":
        console.log("1.  Correct!")
        ++score;
        break;
        default:
            console.log("1.  Incorrect!");
            
}
switch(quiz.question_2){
    case "a) let value: any;":
        console.log("2.  Correct!")
        ++score;
        break;
        default:
            console.log("2.  Incorrect!");
            
}
switch(quiz.question_3){
    case "c) Block":
        console.log("3.  Correct!")
        ++score;
        break;
        default:
            console.log("3.  Incorrect!");
            
}
switch(quiz.question_4){
    case "a) Type declaration":
        console.log("4.  Correct!")
        ++score;
        break;
        default:
            console.log("4.  Incorrect!");
            
}
switch(quiz.question_5){
    case "d) const":
        console.log("5.  Correct!")
        ++score;
        break;
        default:
            console.log("5.  Incorrect!");
            
}
switch(quiz.question_6){
    case "c) undefined":
        console.log("6.  Correct!")
        ++score;
        break;
        default:
            console.log("6.  Incorrect!");
            
}
switch(quiz.question_7){
    case "c) let isDone: boolean = false;":
        console.log("7.  Correct!")
        ++score;
        break;
        default:
            console.log("7.  Incorrect!");
            
}
switch(quiz.question_8){
    case "a) let value: string | number;":
        console.log("8.  Correct!")
        ++score;
        break;
        default:
            console.log("8.  Incorrect!");
            
}
switch(quiz.question_9){
    case "b) let":
        console.log("9.  Correct!")
        ++score;
        break;
        default:
            console.log("9.  Incorrect!");
            
}
switch(quiz.question_10){
    case "b) let count = 5;":
        console.log("10. Correct!")
        ++score;
        break;
        default:
            console.log("10. Incorrect!");
            
}

console.log(`Score ${score}`)