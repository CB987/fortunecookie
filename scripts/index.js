// console.log("test");

// 1. make some code run when i click the button.
const fortuneTriggerElement = document.querySelector('[data-trigger-fortune]');

const fortuneOutputElement = document.querySelector('[data-output-fortune]');

const fortunes = [
    "Blueberries are our friends",
    "Cats are the best",
    "So are dogs",
    "And pandas",
    "Go back to sleep",
    "It\'ll be ok",
    "I\'m so fancy",
];

const quoteTriggerElement = document.querySelector('[data-trigger-quote');
const movieQuoteOutputElement = document.querySelector('[data-output-quote]');
const moviePicOutputElement = document.querySelector('[data-output-movie-pic]')

const movieQuotes = [
    { caption: "\'Do or do not; there is no try.\'", pic: "images/yoda.jpeg"},
    { caption: "\'Hasta la vista, baby!\'", pic: "images/arnie.jpeg"},
    { caption: "\'Who you gonna call?\'", pic: "images/ghostbusters.jpg"},
    { caption: "\'These aren't the droids you're looking for.\'", pic: "images/Obi-Wan.jpeg"},
    { caption: "\'I am no man!\' <stabs witch-king of Ang-Mar in the face>", pic: "images/Eowyn.jpeg"}
]

const picTriggerElement = document.querySelector('[data-trigger-pic]');
const picOutputElement = document.querySelector('[data-output-pic]')
const captionOutputElement = document.querySelector('[data-output-caption]')

const pics = [
    { caption: 'If you don\'t get me coffee, I will murder your family.', pic: "images/coffee.jpg"},
    { caption: 'The sunrise is a great way to start the day, as long as I\'m asleep while it\'s happening.', pic: "images/sunrise.jpg"},
    { caption:"Yeah you\'re going to have to turn the lights on so I can read.", pic: "images/candle.jpg"},
    { caption: 'These adorable bundles of joy will keep you up all night and pee in your shoes.', pic: "images/kittens.jpg"}, { caption: 'Awwww... babies are so precious. In 6 months you will realize it\'s truly sleep that is precious.', pic: "images/baby.jpg"}

]
// let index = 0;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
// let index = getRandomArbitrary(0, fortunes.length);
// // }

// addEventListever accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens

fortuneTriggerElement.addEventListener('click', function () {
    
    // function getRandomArbitrary(min, max) {
    // return Math.floor(Math.random() * (max - min) + min);
    // }
// // console.log("Hello addEventListener");
    let index = getRandomArbitrary(0, fortunes.length);
    // const newFortune = fortunes[index];
    // fortuneOutputElement.textContent = newFortune;
    fortuneOutputElement.textContent = fortunes[index];
    // const newFortune = fortunes.pop();
    // index++;
    // if (index > fortunes.length - 1) {
    //     index = 0;
    // };
});

quoteTriggerElement.addEventListener('click', function () {
    let index = getRandomArbitrary(0, movieQuotes.length);
    movieQuoteOutputElement.textContent = movieQuotes[index].caption; moviePicOutputElement.src = movieQuotes[index].pic;
});


picTriggerElement.addEventListener('click', function () {
    let index = getRandomArbitrary(0, pics.length);
    picOutputElement.src = pics[index].pic; 
    // picOutputElement.setAttribute("src", pics[index].pic);
    captionOutputElement.textContent = pics[index].caption;
});
// 2. write some text to the page on button click

    // function hello(){
    //     console.log('Hello addEventListener!');
    // } (can also make an anonymous function- see above)

//  add a data-attribute to to div where it appears

// 3. pull text from an array of text to write to the page. (see const fortunes)

// triggerElement.addEventListener('click', function () {
//     console.log('Hello addEventListener!');
//     // const newFortune = fortunes.pop();
//     const newFortune = fortunes[index];
//     outputElement.textContent = newFortune;
//     index++;
//     if (index > fortunes.length - 1) {
//         index = 0;
//     }
//     // index = index + 1;
// });