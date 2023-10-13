/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const Small_Pizza_Diameter = 13
const Large_Pizza_Diameter = 17

const pizzaSmall = Math.PI * Math.pow((Small_Pizza_Diameter / 2), 2)
const pizzaLarge = Math.PI * Math.pow((Large_Pizza_Diameter / 2), 2)

console.log(`are of 13" pizza: ` + pizzaSmall)
console.log(`are of 17" pizza: ` + pizzaLarge)


// 2. What is the cost per square inch of each pizza?

const Small_Pizza_Cost = 16.99
const Large_Pizza_Cost = 19.99

const costSmall = Small_Pizza_Cost / pizzaSmall
const costLarge = Large_Pizza_Cost / pizzaLarge

console.log(`cost per square inch of 13" pizza: ` + costSmall)
console.log(`cost per square inch of 17" pizza: ` + costLarge)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const maxCardVal = 13
console.log(`Drawing a random card :` + Math.floor(Math.random() * maxCardVal) + 1)

// 4. Draw 3 cards and use Math to determine the highest
// card

const arrayCards = new Array(3)

for (let i = 1; i < 4; i++)
{
    arrayCards[i] = Math.floor(Math.random() * maxCardVal) + 1
    console.log(`card ${i}:` + arrayCards[i])
}
const highestCard = arrayCards.reduce((a, b) => Math.max(a, b));
console.log(`The highest card :` + highestCard)


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "Matt"
const lastName = "Schneider"
const streetAddress = "1234 5th Ave"
const city = "Seattle"
const state = "WA"
const zipCode = "12345"

const personAddress =  
`${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`

console.log(personAddress)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const firstNameFromAddress = personAddress.split(' ')[0]
console.log(firstNameFromAddress)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

const startDate = new Date("2020-01-01");
const endDate = new Date("2020-04-01");

const middleDate = new Date(endDate - (endDate-startDate)/2);
console.log(middleDate);