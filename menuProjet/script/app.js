const links = document.querySelectorAll('.links li')
const navBtn = document.querySelector('.slide-btn')
const navLinks = document.querySelector('.nav-links')

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();


navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-nan-links');
})


const articles = document.querySelectorAll('.article')

const test = articles.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        articles.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })
        const result = question.classList.toggle('show-text');

    })
})