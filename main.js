'use strict';

const STORE = {
  //q1
  q1: {
    question: 'What is an event horizon?',
    option1: 'A movie starring Laurence Fishburne and Brad Pitt.',
    option2: 'It is the point at which light can no longer escape a black hole due to gravity.',
    option3: 'The theory proposed by Albert Einstien.',
    option4: 'The growing distance between Earth and the center of the universe.',
    correctAnswer: 'option2',
    explanation: `In astrophysics, an event horizon is a boundary beyond which events cannot affect an observer on the opposite side of it. An event horizon is 
            most commonly associated with black holes, where gravitational forces are so strong that light cannot escape.`,

  },
  //Question: str
  //answer1: str
  //answer2: str
  //answer3: str
  //answer4: str 
  //correct answer: number
  //question image: img
  //q2
  q2: {
    question: 'Why do stars twinkle?',
    option1: 'Twinkle Twinkle Little Star.',
    option2: 'Space debris is coming between Earth and the stars briefly.',
    option3: 'Stars twinkle due to the turbulence in the atmosphere of the Earth.',
    option4: 'The gravitational field of space interacts with the gravitational field of the sun.',
    correctAnswer: 'option3',
    // eslint-disable-next-line quotes
    explanation: `As the atmosphere churns, the light from the star is refracted in different directions. This causes the star's image to change slightly in brightness and position, hence "twinkle."`,

  },
  //q3
  q3: {
    question: 'What is the second nearest star to Earth?',
    option1: 'The sun.',
    option2: 'Arcturus',
    option3: 'Alpha Centauri A',
    option4: 'Proxima Centauri',
    correctAnswer: 'option3',
    explanation: `The closest star to Earth are three stars in the Alpha Centauri system. The two main stars are Alpha Centauri A and Alpha Centauri B, which form a binary pair. They are 
            an average of 4.3 light-years from Earth. The third star is Proxima Centauri. It is about 4.22 light-years from Earth and is the closest star other than the sun.`,

  },
  //q4
  q4: {
    question: 'What is the fastest a neutron star has been recorded to spin per second?',
    option1: '.005 Hz',
    option2: '50.3 Hz',
    option3: '716 Hz',
    option4: '324 Hz',
    correctAnswer: 'option3',
    explanation: `Some neutron stars have jets of materials streaming out of them at nearly the speed of light. As these beams pan past Earth, they flash like the bulb of a lighthouse. Scientists called them pulsars after their pulsing appearance. 
            Normal pulsars spin between 0.1 and 60 times per second, while millisecond pulsars can result as much as 700 times per second.`,

  },
  //q5
  q5: {
    question: 'How much does a full nasa space suit cost?',
    option1: '12 million dollars.',
    option2: '530 thousand dollars.',
    option3: '15 thousand dollars.',
    option4: '2 thousand dollars.',
    correctAnswer: 'option1',
    // eslint-disable-next-line quotes
    explanation: `The cost of a spacesuit originally was about $22 million. Building one from scratch right now can be as much as 250 million due to lack of parts.`,

  },
  qCounter: 0,
  correctCounter: 0
};

//loads and sets up starting welcome page
function renderStartQuiz() {
  restart();
  renderCounter();
  //get main page info
  const home = getHomeScreen();
  //navigate and replace
  $('main').html(home);
  //add homescreen class
  toggleHome();
}

//resets question counter and correct answer counter to 0
function restart() {
  //initialize counters to 0
  STORE.qCounter = 0;
  STORE.correctCounter = 0; 
  //reset the classes on js-form
}

//
function renderCounter () {
  //get info from qcounter and incorCounter
  let q = STORE.qCounter;
  let corr = STORE.correctCounter;
  //replace html
  const counterHtml = getCounterHtml(q, corr);
  $('#js-counters').html(counterHtml);
}

function getCounterHtml(q, corr) {
  return `
  
  <span>Current Question: ${q}/5</span>
      <span>Current Score: ${corr}</span>`;
}

function getHomeScreen() {
  return `
  <form id = 'start-quiz'>
  <h2>Welcome!</h2>
    <button class='start-quiz'>Start Quiz</button>
    </form>`;
}

function renderQuestion() {
  //update question counter
  updateQCount();
  renderCounter();
  //get the html in string for that question
  let question = getQCounter();
  //replace html in form
  $('main').html(getQuestionHtml(question));
}

function getQCounter(){
  return `q${STORE.qCounter}`;
}

function getQuestionHtml(qNum){
  return `
  <form id = 'questions'>
    <span>${STORE[qNum].question}</span> <br>
    <label> <input type="radio" name="q" value="option1">
    ${STORE[qNum].option1} </label><br>
    <label> <input type="radio" name="q" value="option2">
    ${STORE[qNum].option2} </label><br>
    <label> <input type="radio" name="q" value="option3">
    ${STORE[qNum].option3} </label><br>
    <label> <input type="radio" name="q" value="option4">
    ${STORE[qNum].option4} </label><br>
    <div class='right-button'>
        <button class='right-button submit-form'>Submit</button>
    </div>
    </form>`;
}

function toggleHome(){
  $('#js-form').toggleClass('home-screen');
}

function toggleCorrect(){

}

function toggleQuestion(){
  $('#js-form').toggleClass('question');
}

function toggleIncorrect(){

}

function updateQCount() {
  STORE.qCounter++;
}

function renderCorrect() {
  //correctAnswer++
  updateCorrectCount();
  renderCounter();
  //get info for congratulate
  //get info for correct extra info?
  let question = getQCounter();
  $('#js-form').html(getCorrectHtml(question));
  //replace html
}

function getCorrectHtml(qNum){
  return `
  <h3>Correct!</h3>
  <p> Answer: ${STORE[qNum][STORE[qNum].correctAnswer]} </p>
  <p> ${STORE[qNum].explanation} </p>
  <div class='right-button'>
          <button class='right-button' id='next-question'>Next Question -></button>
  </div>`;
}

function updateCorrectCount(){
  STORE.correctAnswer++;
}

function renderIncorrect() {
  //get info for incorrect
  //get info for correct answer 
  //explain
  //replace html
}

function renderEnd() {
  //get info for %correct from qcounter and incorCounter
  //ask if want to play again
  //replace html
}

function handleStart() {
  //listen to start/reset buttons through form
  $('main').on('submit', '#start-quiz', e => {
    e.preventDefault();
    toggleHome();
    toggleQuestion();
    renderQuestion();
  });
}

function handleSubmit() {
  //listen to submit buttons through form
  $('main').on('submit', '#questions', e => {
    e.preventDefault();

    let choice = $(`input[name="q"]:checked`).val();
    console.log(choice);

    let correctAnswer = getCorrectAnswer();
    if (choice === correctAnswer){
      renderCorrect();
    } else {
      renderIncorrect();
    }
  });
  //is answer true?
  //if so rendercorrect() 
  //else update incorrect counter and renderincorrect()
}

function getCorrectAnswer(){
  return STORE[getQCounter()].correctAnswer;
}

function handleNext() {
  //listen to next button through form
  //renderquestion()
}

function main() {
  renderStartQuiz();
  handleStart();
  handleSubmit();
  handleNext();
}

$(main);

