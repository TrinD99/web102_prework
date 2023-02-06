/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data


        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container
    
    for (var g in games) {
        let div = document.createElement('div');
        div.classList.add('game-card');
        const wow = 
        `<img src= ${games[g].img} alt="testing" class = "game-img">  </img>
        <h1> ${games[g].name}</h1>
        <h2> There are ${games[g].backers} backers for this project </h2>
        `
        div.innerHTML = wow;
        gamesContainer.appendChild(div);
    }

   
}

addGamesToPage(GAMES_JSON);

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers

const totalContributions = GAMES_JSON.reduce((acc, game) => {
  return acc + game.backers; 
}, 0);
contributionsCard.innerHTML = totalContributions




// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalAmount= GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged; 
  }, 0);
raisedCard.innerHTML = `$${totalAmount.toLocaleString('en-US')}`
  
// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = GAMES_JSON.length

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    let unfunded = GAMES_JSON.filter ( (game) => {
        console.log(game);
        return game.goal > game.pledged;
      });
    addGamesToPage(unfunded)

    // use filter() to get a list of games that have not yet met their goal


    // use the function we previously created to add the unfunded games to the DOM

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal


    // use the function we previously created to add unfunded games to the DOM
    let funded = GAMES_JSON.filter ( (game) => {
        return game.goal <= game.pledged;
      });
    addGamesToPage(funded)

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON)

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
let unfunded = GAMES_JSON.filter ( (game) => {
    return game.goal > game.pledged;
  });

let gameStr = `A total of $${totalAmount.toLocaleString('en-US')} has been raised for ${GAMES_JSON.length} games. ${unfunded.length == 0 ? "All games are fully funded, but please feel free to offer your support!" :
 "Currently, " + unfunded.length + " games are still not funded. We need your help to fund these games!" }`;

// create a string that explains the number of unfunded games using the ternary operator

// create a new DOM element containing the template string and append it to the description container
const newContent = document.createTextNode(gameStr);
descriptionContainer.appendChild(newContent);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

let [first, second, ...others] = sortedGames;



let divf = document.createElement('div');
divf.classList.add('game-card');
const wee = 
`<img src= ${first.img} alt="testing" class = "game-img">  </img>
 <h1> ${first.name}</h1>
<h2> ${first.description}</h2>`
divf.innerHTML = wee;
firstGameContainer.appendChild(divf);

let divse = document.createElement('div');
divse.classList.add('game-card');
const way = 
`<img src= ${second.img} alt="testing" class = "game-img">  </img>
 <h1> ${second.name}</h1>
<h2> ${second.description}</h2>`
divse.innerHTML = way;
secondGameContainer.appendChild(divse);




// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item