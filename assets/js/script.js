// <!-- Start with a screen that explains the game and contains a start button to intiate. -->
// <!-- On this start screen will also be a high score link -->
// <!-- Set a timer to begin when the start button is pressed, also taking you to the first question -->
// <!-- Set the timer to begin at whatever time and decrement by 1 second -->
// <!-- User will have 75 seconds to answer 6 questions -->
// <!-- create a string of 5 questions that the user will go through -->
// <!-- create 4 options for answers, adding a click to each one -->
// <!-- Use if statements to determine if the answer is true, or else its false -->
// <!-- Input text after button clicked that will display correct or incorrect. Add green text for correct and red for incorrect. -->
// <!-- If false, the answer is incorrect and decrement the timer by 10 seconds -->
// <!-- Keep track of questions answered correct, decrement by one for each incorrect -->
// <!-- Create end game screen  -->
// <!-- Display score by showing result of dividing questions answered by questions answered correctly. Thus showing a percentage -->
// <!-- display input text box for user to enter their initials to submit to high score sheet -->
// <!-- Store the high scores inside of a seperate html -->
// <!-- Create play again button to restart the game -->
// <!--  -->


var questions = [
    {
        ask: "Commonly used data types do NOT include:",
        choice: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        ask: "The condition in an if/else statement is enclosed within:",
        choice: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis"
    },
    {
        ask: "Arrays in Javascript can be used to store:",
        choice: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        ask: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["Javascript", "Terminal/Bash", "Console Log", "For Loops"],
        answer: "Console Log"
    },
    {
        ask: "String values must be closed within _____ when being assigned to variabels.",
        choice: ["Curly Brackets", "Commas", "Quotes", "Parenthesis"],
        answer: "Quotes"
    }

];

