
const resultElement = document.getElementById("result");


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const originalQuizMap = new Map([
    ["What is the capital of France?", "Paris"],
    ["What is the largest mammal?", "Blue whale"],
    ["How many continents are there?", "7"],
    // Add more questions and answers as needed
    ["What is the primary chemical reaction that occurs during the discharge of a lead-acid battery?", "Reduction of lead sulfate"],
    ["What distinguishes Sealed Lead-Acid (SLA) batteries from traditional lead-acid batteries?", "They are maintenance-free"],
    ["What is the key advantage of lithium-ion batteries over other types of batteries?", "Higher energy density"],
    ["What is the main function of the commutator in a DC machine?", "To reverse the current direction"],
    ["In a DC motor, what happens when the armature rotates in the magnetic field?", "Torque is produced causing rotation"],
    ["What is the main principle behind the operation of a three-phase induction motor?", "Electromagnetic induction"],
    ["What is a common application of single-phase motors?", "Residential ceiling fans"],
    ["Why is it important to connect electrical equipment to the grounding system?", "To prevent leakage current"],
    ["What is the purpose of an earth fault current in an electrical system?", "To detect faulty insulation"],
    ["What is the primary function of an ammeter?", "Measure current"],
    ["Differentiate between direct and indirect methods of connecting measuring instruments.", "Direct methods measure directly, while indirect methods involve calculations based on other measurements."],
    ["What does range extension refer to in measuring instruments?", "Expanding the range of measurable values"],
    ["What is a significant advantage of digital measuring instruments over analog ones?", "Digital instruments provide faster and more accurate readings"],
    ["Lead-acid batteries: What is the typical electrolyte used?", "Sulfuric acid"],
  ["Sealed lead-acid (SLA) batteries: What is the purpose of the safety valve?", "Prevent overcharging"],
  ["Lithium-ion batteries: What is the cathode material commonly used?", "Lithium cobalt oxide"],
  ["Function and construction of DC machines: What is the role of the armature?", "Convert mechanical energy to electrical energy"],
  ["DC motors: What is the purpose of the commutator?", "Reverse current direction"],
  ["DC generators: In a DC generator, what is the function of the brushes?", "Maintain electrical contact"],
  ["Three-phase induction motors: What is the advantage of a three-phase induction motor over a single-phase motor?", "Higher efficiency"],
  ["Single-phase motors: What is the primary drawback of single-phase motors compared to three-phase motors?", "Limited applications"],
  ["Leakage current and the earthing chain: How does earthing help in limiting leakage current?", "Provide a low-resistance path to ground"],
  ["Earth fault current: What is the consequence of a high earth fault current in an electrical system?", "Risk of electrical fires"],
  ["Function of measuring instruments: What is the basic principle behind the operation of a voltmeter?", "Measures voltage"],
  ["Direct and indirect methods of connecting measuring instruments: Provide an example of a direct method of connecting a measuring instrument.", "Ammeter in series"],
  ["Range extension of measuring instruments: How is the range of a multimeter extended for measuring higher voltages?", "By connecting a resistor in series"],
  ["Digital measuring instruments: What is a significant disadvantage of digital measuring instruments?", "Slower response time"],
]);


let quizMap = shuffleArray([...originalQuizMap]); // Randomize question order
let currentQuestionIndex = 0;
let score = 0;
let timer;

function displayNextQuestion() {
 // Add countdown timer for each question (e.g., 15 seconds)
let timeLeft = 15;
timer = setInterval(() => {
  document.getElementById('progress-bar-inner').style.width = (timeLeft / 15) * 100 + '%';

  if (timeLeft <= 5) {
    document.getElementById('progress-bar-inner').style.backgroundColor = '#f44336';  // Change color to red
  } else {
    document.getElementById('progress-bar-inner').style.backgroundColor = '#4caf50';  // Change color to green
  }

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    checkAnswer(); // Mark the question as incorrect when time runs out
  }
}, 1000);


  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer-input");
  const resultElement = document.getElementById("result");

  // Check if there are still questions left
  if (currentQuestionIndex < quizMap.length) {
    const [question, _] = quizMap[currentQuestionIndex];
    questionElement.textContent = "Question: " + question;
    answerInput.value = "";
    resultElement.textContent = "";
    currentQuestionIndex++;
  } else {
    showFinalResult();
  }
}

function checkAnswer() {
  clearInterval(timer); // Stop the timer
  const answerInput = document.getElementById("answer-input");
  const resultElement = document.getElementById("result");

  // Check if there are still questions left
  if (currentQuestionIndex <= quizMap.length) {
    const [_, correctAnswer] = quizMap[currentQuestionIndex - 1];
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
      resultElement.style.color = "#4caf50"; // Green for correct answer
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.style.color = "#f44336"; // Red for incorrect answer
      resultElement.textContent =
        "Incorrect. The correct answer is: " + correctAnswer;
    }

    if (currentQuestionIndex < quizMap.length) {
      setTimeout(displayNextQuestion, 2000); // Display next question after 2 seconds
    } else {
      showFinalResult();
    }
  }
}

let skippedQuestions = [];

function skipQuestion() {
  clearInterval(timer); // Stop the timer
  const resultElement = document.getElementById("result");
  resultElement.style.color = "#2196F3"; // Blue for skipped question
  resultElement.textContent = "Question skipped.";

  // Keep track of the skipped question for later display
  const [question, correctAnswer] = quizMap[currentQuestionIndex - 1];
  skippedQuestions.push({ question, correctAnswer, skipped: true });

  setTimeout(displayNextQuestion, 2000); // Display next question after 2 seconds
}


function startNewQuiz() {
    // Reset variables and start a new quiz
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(timer);

    // Reset the skipped questions array for the new quiz
    skippedQuestions = [];

    quizMap = shuffleArray([...originalQuizMap]);
    document.getElementById('skip-button').style.display = 'inline-block'; // Show the "Skip Question" button

    // Reset the progress bar color to green
    document.getElementById('progress-bar-inner').style.backgroundColor = '#4caf50';

    // Reset the width of the progress bar to 100%
    document.getElementById('progress-bar-inner').style.width = '100%';

    // Make sure the input field is visible, centered, and has margin-bottom
    const answerInput = document.getElementById('answer-input');
    answerInput.style.display = 'block';
    answerInput.style.margin = 'auto';
    answerInput.style.marginBottom = '10px'; // Add margin-bottom

    // Show the progress bar container
    document.getElementById('progress-bar-container').style.display = 'block';

    // Clear the result element content
    resultElement.textContent = "";

    displayNextQuestion();
}

function showFinalResult() {
    clearInterval(timer); // Stop the timer
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const resultElement = document.getElementById('result');
    const progressBarContainer = document.getElementById('progress-bar-container');
  
    questionElement.textContent = '';
    answerInput.style.display = 'none';
    resultElement.style.fontSize = '24px';
    resultElement.textContent = 'Your final score is: ' + score + ' out of ' + originalQuizMap.size;
  
    // Hide the progress bar container
    progressBarContainer.style.display = 'none';
  
    // Display skipped questions
    skippedQuestions.forEach((skippedQuestion, index) => {
      resultElement.innerHTML += `<br>Skipped Question ${index + 1}: ${skippedQuestion.question}. Correct Answer: ${skippedQuestion.correctAnswer}`;
    });
  
    // Stop the program here
    currentQuestionIndex = quizMap.length + 1;
    hideSkipButton();
  }
  


function hideSkipButton() {
    // Hide the "Skip Question" button when the quiz ends
    document.getElementById('skip-button').style.display = 'none';
  }

// Initial display
displayNextQuestion();
