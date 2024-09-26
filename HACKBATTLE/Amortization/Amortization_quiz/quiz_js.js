const questions = [
    {
        question: "1. What is the basic definition of amortization?",
        answers: [
            { text: "Depreciation of physical assets", correct: false },
            { text: "Allocation of the cost of an intangible asset over its useful life", correct: true },
            { text: "The process of increasing the value of an asset", correct: false },
            { text: "A method of calculating interest on loans", correct: false }
        ]
    },
    {
        question: "2. Which type of assets are typically amortized?",
        answers: [
            { text: "Tangible assets", correct: false },
            { text: " Intangible asset", correct: true },
            { text: "Liquid assets", correct: false },
            { text: "Fixed assets", correct: false } 
        ]
    },
    {
        question: "3. Which of the following is an example of an intangible asset that can be amortized?",
        answers: [
            { text: "Machinery", correct: false },
            { text: "Office building", correct: false },
            { text: "Patents", correct: true },
            { text: "Land", correct: false }
        ]
    },
    {
        question: "4. Amortization is primarily related to which financial statement?",
        answers: [
            { text: "Balance sheet", correct: false },
            { text: "Cash flow statement", correct: false },
            { text: "Income statement", correct: true },
            { text: "Statement of retained earnings", correct: false }
        ]
    },
    {
        question: " 5. What is the purpose of amortizing an intangible asset?",
        answers: [
            { text: "To increase the asset's value", correct: false },
            { text: "To record revenue", correct: false },
            { text: "To gradually expense the cost of the asset over its useful life", correct: true },
            { text: "To liquidate the asset", correct: false }
        ]
    },
    {
        question: "6. Amortization is similar to which other accounting process?",
        answers: [
            { text: "Appreciation", correct: false },
            { text: "Capitalization", correct: false },
            { text: "Depreciation", correct: true },
            { text: "Revaluation", correct: false }
        ]
    },
    {
        question: "7. In amortization of a loan, what does each payment typically include?",
        answers: [
            { text: "Only interest", correct: false },
            { text: "Only principal repayment", correct: false },
            { text: "A portion of interest and principal", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "8. The amortization of a loan helps:",
        answers: [
            { text: "Increase the principal amount", correct: false },
            { text: "Reduce the loan balance over time", correct: true },
            { text: "Increase interest payments over time", correct: false },
            { text: "Delay loan payments", correct: false }
        ]
    },
    {
        question: "9. Which of the following formulas is used to calculate the amortization expense of an intangible asset?",
        answers: [
            { text: "(Cost - Salvage Value) / Useful life", correct: true },
            { text: "Total Cost*Interest Rate", correct: false },
            { text: "Loan Amount ÷ Number of Years", correct: false },
            { text: "Net Profit ÷ Total Assets", correct: false }
        ]
    },
    {
        question: "10. What type of loan is typically repaid through an amortization schedule?",
        answers: [
            { text: "Interest-only loan", correct: false },
            { text: "Balloon loan", correct: false },
            { text: "Fixed-rate mortgage loan", correct: true },
            { text: "Credit card debt", correct: false }
        ]
    },
    {
        question: "11. Amortization schedules are often used for which of the following?",
        answers: [
            { text: "Calculating residual value", correct: false },
            { text: "Tracking principal and interest payments on loans", correct: true },
            { text: "Measuring tax depreciation", correct: false },
            { text: "Determining market value of an asset", correct: false }
        ]
    },
    {
        question: "12. Which of the following is not amortized?",
        answers: [
            { text: "Copyrights", correct: false },
            { text: "Goodwill", correct: false },
            { text: "Research and development costs", correct: false },
            { text: "Land", correct: true }
        ]
    },
    {
        question: "13. Amortization of an intangible asset is shown on which side of the income statement?",
        answers: [
            { text: "As a revenue", correct: false },
            { text: "As a non-operating income", correct: false },
            { text: "As an expense", correct: true },
            { text: "As part of net income", correct: false }
        ]
    },
    {
        question: "14. Which of the following amortization methods allocates equal expense each year?",
        answers: [
            { text: "Reducing balance method", correct: false },
            { text: "Straight-line method", correct: true },
            { text: "Sum of years' digits method", correct: false },
            { text: "Units of production method", correct: false }
        ]
    },
    {
        question: "15. The process of amortization is closely related to which of the following accounting concepts?",
        answers: [
            { text: "Accrual principle", correct: false },
            { text: "Going concern", correct: false },
            { text: "Matching principle", correct: true },
            { text: "Historical cost principle", correct: false }
        ]
    },
    {
        question: "16. In which financial statement is the cumulative amortization of an intangible asset reported?",
        answers: [
            { text: "Cash flow statement", correct: false },
            { text: "Income statement", correct: false },
            { text: "Balance sheet", correct: true },
            { text: "Statement of retained earnings", correct: false }
        ]
    },
    
    {
        question: "17. Amortization expense affects which financial metric?",
        answers: [
            { text: "Net profit", correct: true },
            { text: "Gross revenue", correct: false },
            { text: "Total liabilities", correct: false },
            { text: "Shareholders' equity", correct: false }
        ]
    },
    {
        question: "18. Which of the following is a key difference between amortization and depreciation?",
        answers: [
            { text: "Amortization applies to tangible assets, while depreciation applies to intangible assets", correct: false },
            { text: "Depreciation applies to tangible assets, while amortization applies to intangible assets", correct: true },
            { text: "Both amortization and depreciation apply to tangible assets", correct: false },
            { text: "Both apply to calculating interest expenses", correct: false }
        ]
    },
    {
        question: "19. What is the impact of amortization on a company's financial statements?",
        answers: [
            { text: "Increases the company's liabilities", correct: false },
            { text: "Reduces the company's taxable income", correct: true },
            { text: "Increases the company's cash reserves", correct: false },
            { text: "Does not affect the company's financial statements", correct: false }
        ]
    },
    {
        question: "20. What happens to the book value of an intangible asset over time due to amortization?",
        answers: [
            { text: " It increases", correct: false },
            { text: "It remains constant", correct: false },
            { text: "It decreases", correct: true },
            { text: "It fluctuates", correct: false }
        ]
    }

];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const expBar = document.getElementById("exp-bar");
const expText = document.getElementById("exp-text");

let currentQuestionIndex = 0;
let score = 0;
let expPoints = 0; // Initialize EXP points
const maxExp = 200; // Maximum EXP points (for example)

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    expPoints = 0; // Reset EXP points
    updateExpBar(); // Reset EXP bar
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        expPoints += 10; // Add 10 EXP points for each correct answer
        updateExpBar(); // Update EXP bar
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function updateExpBar() {
    let expPercentage = (expPoints / maxExp) * 100; // Calculate the percentage
    expBar.style.width = expPercentage + "%"; // Update the width of the EXP bar
    expText.innerHTML = `EXP: ${expPoints}/${maxExp}`; // Update the EXP text
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}. <br> You earned ${expPoints} EXP points!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();