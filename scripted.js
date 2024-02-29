
const resultElement = document.getElementById("result");


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

Certainly! Here is the corrected code with proper formatting, including the missing comma in the last entry:


const originalQuizMap = new Map([
    ["What is the purpose of a valve in valve-regulated lead-acid (VRLA) batteries?", "To control the flow of gases and recombine hydrogen with oxygen."],
    ["Explain the construction of VRLA cells and their resistance to vibration.", "Electrolyte is immobilized, surrounded by lead plates, and resistant to vibration."],
    ["What are the two main types of VRLA batteries mentioned in the text?", "Absorbent glass mat (AGM) batteries and Gel batteries."],
    ["How does the construction of AGM batteries differ from Gel batteries?", "AGM uses a glass mat separator, while Gel batteries have electrolyte immobilized in a gel."],
    ["List three applications of VRLA batteries.", "Uninterruptible power supplies (UPS), Motorcycle batteries, Scooter batteries."],
    ["What are the advantages of VRLA batteries listed in the text?", "Maintenance-free, Spill-proof, Leak-proof, Mountable in any position, Long lifespan, Deep discharge recovery, High rate discharge capability."],
    ["What are the disadvantages of VRLA batteries mentioned?", "Higher initial cost than flooded lead-acid batteries, Not as tolerant of high temperatures as flooded lead-acid batteries."],
    ["What are the advantages of Absorbent Glass Mat (AGM) batteries?", "Long lifespan, Vibration resistant, Handles high electrical demand, Greater mounting flexibility, No spillage of electrolyte, Reasonably maintenance-free, Charges quickly, Can handle harsh climates and demanding conditions."],
    ["What are the listed disadvantages of AGM batteries?", "Expensive, Reduced capacity over time, Sensitive to overcharging."],
    ["What are the safety precautions mentioned for handling lead-acid batteries?", "Wear eye and acid-resistant gloves, Work in a well-ventilated area, Avoid smoking or eating near batteries, Do not touch terminals with bare hands, Avoid dropping batteries, Wash immediately if in contact with battery acid, Dispose of batteries properly."],
    ["Describe the construction of a flooded lead-acid battery.", "Positive and negative plates immersed in a liquid electrolyte solution (sulfuric acid and water), Positive plates made of lead dioxide, Negative plates made of lead."],
    ["What happens to hydrogen gas produced during discharge in a flooded lead-acid battery?", "In a flooded lead-acid battery, hydrogen gas escapes into the atmosphere."],
    ["How does a sealed lead-acid (SLA) battery differ in handling hydrogen gas compared to a flooded lead-acid battery?", "In an SLA battery, hydrogen gas recombines with oxygen from the plates to form water, eliminating the need for watering."],
    ["What are the steps listed for fault finding on lead-acid batteries?", "Check electrolyte level, Clean battery terminals, Load test the battery, Check for loose or damaged connections."],
    ["What is the purpose of cleaning battery terminals during maintenance?", "To remove corrosion that may prevent the battery from starting."],
    ["How is the electrolyte level maintained in lead-acid batteries?", "Add distilled water if the electrolyte level is low."],
    ["What is the purpose of load testing a lead-acid battery?", "To check the health of the battery by measuring voltage under load."],
    ["Why is it important to dispose of lead-acid batteries properly?", "Lead-acid batteries contain hazardous substances, and proper disposal is necessary for environmental safety."],
    ["What is the main function of DC machines?", "DC machines convert mechanical energy into electrical energy or vice versa."],
    ["Explain the construction of DC machines.", "DC machines consist of a stator, rotor, commutator, and brushes. The stator produces a magnetic field, the rotor has conductors carrying current, the commutator reverses the current direction, and brushes maintain electrical contact."],
    ["What is the purpose of the commutator in a DC machine?", "The commutator reverses the current direction in the rotor windings, ensuring continuous rotation in DC motors and the generation of direct current in DC generators."],
    ["Differentiate between DC motors and DC generators.", "DC motors convert electrical energy into mechanical energy, producing rotation. DC generators convert mechanical energy into electrical energy by generating direct current."],
    ["How does a DC motor operate?", "When electric current passes through the rotor windings in a magnetic field, a torque is produced, causing the rotor to rotate and mechanical work to be done."],
    ["What is the principle behind the operation of DC generators?", "DC generators operate on the principle of electromagnetic induction, where a moving conductor (rotor) cuts through magnetic lines of flux, inducing a voltage and generating direct current."],
    ["In DC generators, what is the role of the brushes?", "The brushes maintain electrical contact with the rotating commutator, allowing the generated current to be collected and transferred to external circuits."],
    ["Explain the function of the stator in DC machines.", "The stator provides a stationary magnetic field that interacts with the rotor's magnetic field, inducing the generation of electric current in DC generators or producing torque in DC motors."],
    ["What happens when the armature rotates in the magnetic field of a DC motor?", "Rotation of the armature in the magnetic field generates torque, causing the motor to turn."],
    ["How does a DC motor reverse its direction of rotation?", "The direction of rotation in a DC motor can be reversed by reversing the polarity of either the field winding or the armature winding."],
    ["What factors influence the speed of a DC motor?", "The speed of a DC motor is influenced by the applied voltage, the strength of the magnetic field, and the mechanical load."],
    ["Why is the commutator necessary in DC motors?", "The commutator ensures that the current direction in the rotor windings is reversed at the appropriate time, allowing for continuous rotation in the same direction."],
    ["What is the role of brushes in DC motors?", "Brushes maintain electrical contact with the commutator, allowing the current to flow through the rotor windings and producing rotation."],
    ["How is the speed of a DC motor controlled?", "The speed of a DC motor can be controlled by varying the applied voltage, adjusting the field winding current, or using external resistors in series with the armature."],
    ["What are the key components of a DC motor?", "Key components include the stator, rotor, commutator, brushes, and sometimes a field winding."],
    ["What is the difference between a separately excited DC motor and a self-excited DC motor?", "In a separately excited DC motor, the field winding is supplied from an external source. In a self-excited DC motor, the field winding is connected to the same source as the armature winding."],
    ["How does a DC shunt motor differ from a DC series motor?", "In a DC shunt motor, the field winding is connected in parallel (shunt) with the armature winding. In a DC series motor, the field winding is connected in series with the armature winding."],
    ["Explain the construction and working principle of a DC compound motor.", "A DC compound motor combines the features of both series and shunt motors. It has both series and shunt field windings, providing a compromise between high starting torque and constant speed."],
    ["What are the advantages of DC motors?", "Advantages include simplicity, ease of speed control, and the ability to provide high starting torque."],
    ["What are the disadvantages of DC motors?", "Disadvantages include the need for regular maintenance of brushes and commutators, limited speed control range, and potential for sparking at the commutator."],
    ["How does a DC generator produce direct current?", "A DC generator produces direct current by utilizing a commutator to reverse the direction of the generated current in the armature windings, resulting in a unidirectional output."],
    ["What is the role of the armature in a DC generator?", "The armature in a DC generator consists of conductors that cut through magnetic lines of flux, inducing a voltage as the armature rotates, leading to the generation of direct current."],
    ["What are the types of DC generators based on their field winding connections?", "DC generators can be classified as shunt-wound, series-wound, or compound-wound based on the connection of their field windings."],
    ["Explain the working principle of a shunt-wound DC generator.", "In a shunt-wound DC generator, the field winding is connected in parallel (shunt) with the armature winding. It produces a nearly constant voltage output."],
    ["Explain the working principle of three-phase induction motors.", "Three-phase induction motors operate based on the induction principle, where a rotating magnetic field in the stator induces a current in the rotor, producing motion."],
    ["What are the advantages of three-phase induction motors?", "Advantages include simplicity, reliability, and high efficiency. They are also self-starting and have a higher power factor."],
    ["Differentiate between squirrel cage and wound rotor three-phase induction motors.", "Squirrel cage motors have shorted rotor conductors, providing simplicity and ruggedness. Wound rotor motors have externally connected rotor windings, allowing external resistance control for starting."],
    ["Explain the concept of slip in induction motors.", "Slip in induction motors is the difference between the synchronous speed of the rotating magnetic field and the rotor speed. It is expressed as a percentage."],
    ["What is the significance of the slip in induction motors?", "Slip is essential for the induction motor's ability to produce torque and, therefore, rotation. Higher slip values correspond to higher torque."],
    ["How is the speed of a three-phase induction motor controlled?", "The speed of three-phase induction motors can be controlled by adjusting the voltage or frequency of the applied power supply."],
    ["What are the common starting methods for three-phase induction motors?", "Common starting methods include direct-on-line (DOL) starting, star-delta starting, and auto-transformer starting."],
    ["Explain the working principle of single-phase motors.", "Single-phase motors operate using a single alternating current phase. They rely on the creation of a rotating magnetic field for motion."],
    ["What are the types of single-phase motors?", "Types include split-phase motors, capacitor-start motors, capacitor-start capacitor-run motors, and shaded-pole motors."],
    ["What are the applications of single-phase motors?", "Single-phase motors are commonly used in household appliances, fans, pumps, and small industrial machines."],
    ["Define earthing in electrical systems.", "Earthing involves connecting the metallic parts of electrical equipment to the ground to ensure safety by preventing electric shocks and providing a path for fault currents."],
    ["Explain the concept of leakage current in electrical systems.", "Leakage current is the unintentional flow of electric current from a conductor to the ground, often due to insulation breakdown or faulty equipment."],
    ["Describe the earthing chain in electrical systems.", "The earthing chain involves the connection of electrical equipment, conductive structures, and the grounding system to provide a continuous path for fault currents to reach the ground."],
    ["What is earth fault current?", "Earth fault current is the current that flows to the ground in the event of a fault in the electrical system, such as a short circuit or insulation failure."],
    ["Why is proper earthing essential in electrical systems?", "Proper earthing is essential for ensuring safety by preventing electric shocks, protecting equipment, and facilitating the operation of protective devices during faults."],
    ["Explain the consequences of inadequate earthing in electrical systems.", "Inadequate earthing can lead to increased risk of electric shock, equipment damage, and compromised effectiveness of protective devices, posing hazards to both personnel and property."],
    ["What are the different methods of earthing?", "Methods include plate earthing, pipe earthing, rod earthing, and strip earthing. The choice depends on factors such as soil resistivity and space availability."],
    ["How does earthing contribute to the safety of electrical installations?", "Earthing ensures the timely operation of protective devices, prevents the buildup of voltage on equipment, and provides a path for fault currents, reducing the risk of electric shock and fire."],
    ["Explain the term 'equipotential bonding' in the context of earthing.", "Equipotential bonding involves connecting all metallic parts of an electrical installation to maintain them at the same potential, reducing the risk of electric shock and promoting safety."],
    ["What is the purpose of using earth electrodes in earthing systems?", "Earth electrodes facilitate the connection between the electrical installation and the ground, ensuring effective dissipation of fault currents and maintaining the safety of the system."],
    ["What is the primary function of measuring instruments?", "Measuring instruments are designed to quantify and display physical quantities such as voltage, current, resistance, and others in electrical circuits."],
    ["Differentiate between direct and indirect methods of connecting measuring instruments.", "Direct methods involve connecting the measuring instrument directly to the circuit under test, while indirect methods use additional components or circuits to measure the desired quantity."],
    ["How is the range of measuring instruments extended?", "The range of measuring instruments is extended by using additional resistors or other components in series or parallel to the instrument, allowing it to measure a wider range of values."],
    ["Explain the concept of range extension in measuring instruments.", "Range extension involves modifying the measuring instrument's circuit to enable it to measure higher or lower values than its inherent range, providing versatility in various applications."],
    ["What are the advantages of using direct methods in connecting measuring instruments?", "Direct methods offer simplicity and accuracy, as the measuring instrument is directly connected to the circuit being tested without the need for additional components."],
    ["Provide an example of a direct method of connecting a measuring instrument.", "Connecting a voltmeter in parallel or an ammeter in series with the component under test are examples of direct methods in measuring instruments."],
    ["How are indirect methods advantageous in connecting measuring instruments?", "Indirect methods allow the measuring instrument to be isolated from the circuit under test, providing safety and convenience, especially when dealing with high voltages or currents."],
    ["What does range extension refer to in measuring instruments?", "Range extension refers to the capability of a measuring instrument to measure values beyond its inherent range, achieved by incorporating external components into its circuit."],
    ["Explain the principle behind range extension using shunt resistors.", "Range extension using shunt resistors involves placing a low-resistance shunt in parallel with a measuring instrument to divert excess current, enabling measurement of higher currents."],
    ["How is range extension achieved in multimeters for measuring higher voltages?", "Range extension in multimeters for higher voltages is accomplished by incorporating resistive voltage dividers, allowing the measurement of a broader range without altering the basic meter."],
    ["What are the common types of digital measuring instruments?", "Common types include digital multimeters (DMMs), oscilloscopes, function generators, and frequency counters, each designed for specific measurement tasks."],
    ["What is the significance of digital measuring instruments in modern electronics?", "Digital measuring instruments provide accurate and fast measurements, offer digital readouts for easy interpretation, and often include advanced features like data storage and connectivity."],
    ["How do digital measuring instruments differ from analog ones in terms of readings?", "Digital measuring instruments provide numerical readings on a digital display, offering precise and easy-to-read results, whereas analog instruments use a pointer on a scale for visual interpretation."]
]);



let quizMap = shuffleArray([...originalQuizMap]); // Randomize question order
let currentQuestionIndex = 0;
let score = 0;
let timer;

function displayNextQuestion() {
 // Add countdown timer for each question (e.g., 15 seconds)
let timeLeft = 60;
timer = setInterval(() => {
  document.getElementById('progress-bar-inner').style.width = (timeLeft / 15) * 100 + '%';

  if (timeLeft <= 15) {
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
