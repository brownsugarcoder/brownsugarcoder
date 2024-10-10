let button = document.getElementById('btn');
let output = document.getElementById('output');

// Song Lyric Quotes 
let quotes =

[
    'Sky is the limit and you know that you keep on, Just keep on pressin on. Sky is the limit and you know that you can have what you want, be what you want. - Sky is the Limit by Notorious BIG',
    'But please don’t cry, dry your eyes, never let up. Forgive but don’t forget, girl keep your head up - Keep Ya Head Up by Tupac',
    '"Nevermind what haters say,ignore them ’til they fade away." - Live Your Life by T.I',
    '"Everything is everything, What is meant to be, will be. After winter, must come spring,Change, it comes eventually" - Everything is Everything by Lauryn Hill ',
];

// Randomize Song Quotes

btn.addEventListener("click", function(){
    let randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
    window.alert('A new quote has been generated!');
})


// On mouseover, the color of the quote text will turn blue.
output.addEventListener('mouseover', () => {
    output.style.color = 'blue';
  });
// Hover will revert back once mouse moves.
  output.addEventListener('mouseout', () => {
    output.style.color = 'black';  
  });

  // Adds New Music Emoji's

const emoji = document.getElementById('emoji');
   emoji.append('🎻 🎹 ');

// Change Lorem Ipsum text
let lorem = document.createElement('div');
  lorem.innerHTML = '<em> Testing </em> ';

// User can submit their own song lyrics
const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (event) => {
    const userQuote = document.getElementById('userQuote').value;

    if (userQuote.trim() === '') {
        event.preventDefault();  
        alert('Please enter a real song lyric');  
    } else {
        quotes.push(userQuote);  
        alert('Your quote has been added!');
        document.getElementById('userQuote').value = ''; 
    }
});