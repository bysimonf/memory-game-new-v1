const cardsData = [
    {
        "name": "bird",
        "image": "bird.jpg",
    },
    {
        "name": "dog",
        "image": "dog.jpg",
    },
    {
        "name": "dog",
        "image": "dog.jpg",
    },
    {   
        "name": "bird",
        "image": "bird.jpg",
    }
]

// Function 1: reveal a card when clicking on it
// What should the function do?
// - change the image + alt attribute 
// - adding the clicked image to cardsToCompare (array that will be used to compare two cards for their equality)

const revealCard = () => { 

    console.log('card revealed')
    console.log(event.target)
    event.target.setAttribute('src', `images/${cardsData[event.target.id].image}`) // using the id of the clicked element as the index in CardsData, so we can get the right image
    event.target.setAttribute('alt', `${cardsData[event.target.id].name}`)
    cardsToCompare.push(event.target) // adding the clicked element to an array, so we can compare them

    if (cardsToCompare.length === 2) {
        checkForMatch()
    }
}

// -----------------------------------------------------------------------------------

// v2: create DOM elements via JS: 
const gameTable = document.querySelector('.game-table')

const createMemoryCards = () => {

    for (i = 0; i < cardsData.length; i++) {

        const memoryCard = document.createElement('div')
        memoryCard.classList.add('memory-card')
        
        const memoryCardImage = document.createElement('img')
        memoryCardImage.setAttribute('src', 'images/cardbackground.jpg')
        memoryCardImage.setAttribute('alt', 'background of the memory card')
        memoryCardImage.setAttribute('id', i)
        memoryCardImage.setAttribute('width', 100)
        memoryCardImage.setAttribute('height', 100)
        
        memoryCard.appendChild(memoryCardImage)

        memoryCard.addEventListener('click', revealCard)

        gameTable.appendChild(memoryCard)
    }
}

createMemoryCards()


// -----------------------------------------------------------------------------------

// Function 2: Using cardsToCompare to compare two clicked cards for their equality
// What should the function do?
// - if the two cards have same attribute we have a match
// - if not we want to reset the img src + alt attribute

let cardsToCompare = []

let gameEndCount = 0

const checkForMatch = () => {

    if (cardsToCompare[0].alt === cardsToCompare[1].alt) { // using alt attribute to check for match
        console.log('it is a match!')
        cardsToCompare = []
        gameEndCount++

        if (gameEndCount === cardsData.length / 2) {
            setTimeout(() => {
                alert('The game is finished!')}, 1000)
        }
    }
    else {
        setTimeout(() => {  // using setTimeout bc otherwise image changes to fast
        console.log('sorry no match!')
        cardsToCompare[0].src = 'images/cardbackground.jpg'
        cardsToCompare[0].alt =  'background of the memory card'

        cardsToCompare[1].src = 'images/cardbackground.jpg'
        cardsToCompare[1].alt =  'background of the memory card'

        cardsToCompare = []

     }, 1000)
    }
}


