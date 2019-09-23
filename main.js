'use strict';

const STORE = {
  
  q1: {
    question: 'What is an event horizon?',
    option1: 'A movie starring Laurence Fishburne and Brad Pitt.',
    option2: 'It is the point at which light can no longer escape a black hole due to gravity.',
    option3: 'The theory proposed by Albert Einstien.',
    option4: 'The growing distance between Earth and the center of the universe.',
    correctAnswer: 'option2',
    explanation: `In astrophysics, an event horizon is a boundary beyond which events cannot affect an observer on the opposite side of it. An event horizon is 
            most commonly associated with black holes, where gravitational forces are so strong that light cannot escape.`,
    image: 'images/blackhole.jpg',
    imageAlt: 'A picture of a blackhole.'
  },

  q2: {
    question: 'Why do stars twinkle?',
    option1: 'Twinkle Twinkle Little Star.',
    option2: 'Space debris is coming between Earth and the stars briefly.',
    option3: 'Stars twinkle due to the turbulence in the atmosphere of the Earth.',
    option4: 'The gravitational field of space interacts with the gravitational field of the sun.',
    correctAnswer: 'option3',
    // eslint-disable-next-line quotes
    explanation: `As the atmosphere churns, the light from the star is refracted in different directions. This causes the star's image to change slightly in brightness and position, hence "twinkle."`,
    image: 'images/space_1.jpg',
    imageAlt: 'An image of the galaxy.'
  },
  
  q3: {
    question: 'What is the second nearest star to Earth?',
    option1: 'The sun.',
    option2: 'Arcturus',
    option3: 'Alpha Centauri A',
    option4: 'Proxima Centauri',
    correctAnswer: 'option3',
    explanation: `The closest star to Earth are three stars in the Alpha Centauri system. The two main stars are Alpha Centauri A and Alpha Centauri B, which form a binary pair. They are 
            an average of 4.3 light-years from Earth. The third star is Proxima Centauri. It is about 4.22 light-years from Earth and is the closest star other than the sun.`,
    image: 'images/alphaCenturi.jpg',
    imageAlt: 'An image of Alpah Centauri.'
  },
  
  q4: {
    question: 'What is the fastest a neutron star has been recorded to spin per second?',
    option1: '.005 Hz',
    option2: '50.3 Hz',
    option3: '716 Hz',
    option4: '324 Hz',
    correctAnswer: 'option3',
    explanation: `Some neutron stars have jets of materials streaming out of them at nearly the speed of light. As these beams pan past Earth, they flash like the bulb of a lighthouse. Scientists called them pulsars after their pulsing appearance. 
            Normal pulsars spin between 0.1 and 60 times per second, while millisecond pulsars can result as much as 700 times per second.`,
    image: 'images/neutron-star.png',
    imageAlt: 'An image of a neutron star.'
  },
  
  q5: {
    question: 'How much does a full nasa space suit cost?',
    option1: '12 million dollars.',
    option2: '530 thousand dollars.',
    option3: '15 thousand dollars.',
    option4: '2 thousand dollars.',
    correctAnswer: 'option1',
    // eslint-disable-next-line quotes
    explanation: `The cost of a spacesuit originally was about $22 million. Building one from scratch right now can be as much as 250 million due to lack of parts.`,
    image: 'images/space_3.jpg',
    imageAlt: 'An image of an astronaught in space.'
  },
  qCounter: 0,
  correctCounter: 0,
  incorrectAnswer: ""
};


//-------------------------------------------------------------------------------------
//render functions


function renderStartQuiz() {
  restart();
  renderCounter();

  const home = getHomeScreenHtml();
  $('main').html(home);
}

function renderCounter () {
  let q = STORE.qCounter;
  let corr = STORE.correctCounter;

  const counterHtml = getCounterHtml(q, corr);
  $('#js-counters').html(counterHtml);
}

function renderQuestion() {
  updateQCount();
  renderCounter();
  
  let question = getQCounterString();
  let questionHtml = getQuestionHtml(question);
  $('main').html(questionHtml);
}

function renderCorrect() {
  updateCorrectCount();
  renderCounter();
 
  let question = getQCounterString();
  let correctHtml = getCorrectHtml(question);
  $('main').html(correctHtml);
}

function renderIncorrect() {
  renderCounter();

  let question = getQCounterString();
  let incorrectHtml = getIncorrectHtml(question, STORE.incorrectAnswer);
  $('main').html(incorrectHtml);
}

function renderEnd() {
  let endHtml = getEndHtml();
  $('main').html(endHtml);
}


//---------------------------------------------------------------------------
//get HTML functions


function getHomeScreenHtml() {
  return `
  <form id = 'start-quiz'>
    <h2>Welcome!</h2>
    <img id = 'welcome-image' src="images/space_4.jpg" alt="A picture of a bunch of planets revoving around a star.">
    <button class='start-quiz'>Start Quiz</button>
  </form>`;
}

function getCounterHtml(q, corr) {
  return `<span>Current Question: ${q}/5</span>
      <span>Current Score: ${corr}</span>`;
}

function getQuestionHtml(qNum){
  let option;
  let str = `
  <form id = 'questions'>
    <span>${STORE[qNum].question}</span><br><br>`;

  for (let i = 1; i < 5; i++){
    option = 'option' + i;
    str += `
    <label> 
      <input type="radio" name="q" value="${option}">${STORE[qNum][option]} 
    </label><br><br>`; //adds this html string to end of str
  }

  str += `
      <div class='right-button'>
        <button class='right-button submit-form'>Submit</button>
      </div>
    </form>`;//closes off the str html string.

  return str;
}

function getCorrectHtml(qNum){
  return `
  <form id="answer">
    <img src="${STORE[qNum].image}" alt="${STORE[qNum].imageAlt}">
    <h3>Correct!</h3>
    <p>Your answer: ${STORE[qNum][STORE[qNum].correctAnswer]}</p>
    <p>${STORE[qNum].explanation}</p>
    <div class='right-button'>
            <button class='right-button' id='next-question'>Next Question -></button>
    </div>
  </form>`;
}

function getIncorrectHtml(qNum, theirAnswer){
  return `
  <form id="answer">
    <img src="${STORE[qNum].image}" alt="${STORE[qNum].imageAlt}">
    <h3>Incorrect!</h3>
    <p>Your answer: ${theirAnswer}</p>
    <p>Correct answer: ${STORE[qNum][STORE[qNum].correctAnswer]}</p>
    <p>${STORE[qNum].explanation}</p>
    <div class='right-button'>
            <button class='right-button' id='next-question'>Next Question -></button>
    </div>
  </form>`;
}

function getEndHtml(){
  return `
  <form id="end-screen">
    <img src="images/space_2.jpg" alt="A picture of the sun coming around the edge of the earth taken from space.">
    <p>This is your score: ${STORE.correctCounter}/5</p>
    <button id = 'restart-quiz'>Restart the quiz?</button>
  </form>`;
}


//---------------------------------------------------------------------
//utility Functions


function updateQCount() {
  STORE.qCounter++;
}

function updateCorrectCount(){
  STORE.correctCounter++;
}

function getQCounterString(){
  return `q${STORE.qCounter}`;
}

function getCorrectAnswer(){
  let current = getQCounterString();
  return STORE[current].correctAnswer;
}

function restart() {
  STORE.qCounter = 0;
  STORE.correctCounter = 0; 
  STORE.incorrectAnswer = '';
}


//----------------------------------------------------------------------------
//event handling listener functions


function handleStart() {
  $('main').on('submit', '#start-quiz', e => {
    e.preventDefault();

    renderQuestion();
  });
}

function handleSubmit() {
  $('main').on('submit', '#questions', e => {
    e.preventDefault();

    let choice = $('input[name="q"]:checked').val();
    let correctAnswer = getCorrectAnswer();
    let currentQuestion = getQCounterString();

    if(choice !== undefined) {
      if (choice === correctAnswer){
        renderCorrect();
      } else {
        STORE.incorrectAnswer = STORE[currentQuestion][choice];
        renderIncorrect();
      }
    } else alert('Please choose an answer.');
  });
}

function handleNext() {
  $('main').on('submit', '#answer', e => {
    e.preventDefault();

    if (STORE.qCounter < 5){
      renderQuestion();
    } else {
      renderEnd();
    }
  });
}

function handleRestart() {
  $('main').on('submit', '#end-screen', e => {
    e.preventDefault();

    renderStartQuiz();
  });
}


//------------------------------------------------------------
//main Function


function main() {
  renderStartQuiz();
  handleStart();
  handleSubmit();
  handleNext();
  handleRestart();
}

$(main);

