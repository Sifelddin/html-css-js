const quotations = [{
        author: 'George Washington Carver',
        authorProfession: 'Scientist',
        nationality: 'American',
        quote: 'Fear of something is at the root of hate for others, and hate within will eventually destroy the hater'
    },
    {
        author: 'Isaac Asimov',
        authorProfession: 'Scientist',
        nationality: 'American',
        quote: 'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.'
    },
    {
        author: 'Marie Curie',
        authorProfession: 'Scientist',
        nationality: 'Polish',
        quote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.'
    },
    {
        author: 'Muhammad Ali',
        authorProfession: 'Athlete',
        nationality: 'American',
        quote: 'I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion.'
    },
    {
        author: 'Martin Luther King, Jr.',
        authorProfession: 'Leader',
        nationality: 'American',
        quote: 'We must learn to live together as brothers or perish together as fools.'
    },
    {
        author: 'Martin Luther King, Jr.',
        authorProfession: 'Leader',
        nationality: 'American',
        quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'
    },
    {
        author: 'Abraham Lincoln',
        authorProfession: 'President',
        nationality: 'American',
        quote: 'Sir, my concern is not whether God is on our side; my greatest concern is to be on God\'s side, for God is always right.'
    },
    {
        author: 'Martin Luther',
        authorProfession: 'Leader',
        nationality: 'German',
        quote: 'Peace is more important than all justice; and peace was not made for the sake of justice, but justice for the sake of peace.'
    },
    {
        author: 'Mark Twain',
        authorProfession: 'Author',
        nationality: 'American',
        quote: 'The best way to cheer yourself up is to try to cheer somebody else up.'
    },
    {
        author: 'Mark Twain',
        authorProfession: 'Author',
        nationality: 'American',
        quote: 'It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.',
    },
    {
        author: 'Pablo Picasso',
        authorProfession: 'Artist',
        nationality: ' Spanish',
        quote: 'Painting is a blind man\'s profession. He paints not what he sees, but what he feels, what he tells himself about what he has seen.'
    },
    {
        author: 'Anne Frank',
        authorProfession: 'Writer',
        nationality: 'German',
        quote: 'We all live with the objective of being happy; our lives are all different and yet the same.'
    },
    {
        author: 'William Shakespeare',
        authorProfession: 'Dramatist',
        nationality: 'English',
        quote: 'Cowards die many times before their deaths; the valiant never taste of death but once.'
    },
    {
        author: 'Napoleon Bonaparte',
        authorProfession: 'Leader',
        nationality: 'French',
        quote: 'One must change one\'s tactics every ten years if one wishes to maintain one\'s superiority.'
    },
    {
        author: 'Karl Marx',
        authorProfession: 'Philosopher',
        nationality: 'German',
        quote: 'The theory of Communism may be summed up in one sentence: Abolish all private property.'
    },
    {
        author: 'Louis Pasteur',
        authorProfession: 'Scientist',
        nationality: 'French',
        quote: 'There are no such things as applied sciences, only applications of science.'
    }
]

const author = document.getElementById('author');
const quote = document.getElementById('quote');
const nationality = document.getElementById('nationality');
const authorProfession = document.getElementById('authorProfession');
const quoteLeft = document.querySelector('.fa-quote-left');
const quoteRight = document.querySelector('.fa-quote-right');


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    const item = quotations[currentItem];

    author.textContent = item.author;
    authorProfession.textContent = item.authorProfession;
    nationality.textContent = item.nationality;
    quote.textContent = item.quote;
});

// show author based on item
function showAuthor(person) {
    const item = quotations[person];
    author.textContent = item.author;
    authorProfession.textContent = item.authorProfession;
    nationality.textContent = item.nationality;
    quote.textContent = item.quote;
}

// show next author
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > quotations.length - 1) {
        currentItem = 0;
    }
    showAuthor(currentItem);
    flipColor();

});

// show prev author
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = quotations.length - 1;
    }
    showAuthor(currentItem);
    flipColor()
});

randomBtn.addEventListener("click", function () {


    currentItem = Math.floor(Math.random() * quotations.length);
    showAuthor(currentItem);
    flipColor();
});


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const flipColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    if (hexColor != "#FFFFFF" && hexColor != "#FFF") {
        document.body.style.backgroundColor = hexColor;
        author.style.color = hexColor;
        authorProfession.style.color = hexColor;
        nationality.style.color = hexColor;
        quote.style.color = hexColor;
        nextBtn.style.backgroundColor = hexColor;
        randomBtn.style.backgroundColor = hexColor;
        prevBtn.style.backgroundColor = hexColor;
        quoteLeft.style.color = hexColor
        quoteRight.style.color = hexColor
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}