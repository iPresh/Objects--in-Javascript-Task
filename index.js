// Question1: Using the constructor method, create an InstagramPost() constructor function 

function InstagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}


// Question 2: Create 2 Instagram post objects from the constructor function you created above

const post1 = new InstagramPost('@John', 'Happy new week', 'www.instagram/john', 2900, 500)
console.log(post1)

const post2 = new InstagramPost('@mary', 'Gorgeous, gorgeous women', 'www.instagram/mary45', 5000, 1400)
console.log(post2)



// Question 3a: Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments.
// Afterwards, create an object representing Musa from the factory function. 


function createPerson(name, age, location){
    return {
        name: name,
        age: age,
        location: location
    }
}

const person = createPerson('Musa', 19, 'Lekki, Lagos')
console.log(person)



//Question 3b: Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments.
// Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(eng, govt, lit, crk){
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}

const scores = createJambScores(70, 85, 82, 94)
console.log(scores)


person.scores = createJambScores(70, 85, 82, 94)
console.log(person)



// Different ways you can clone an object using examples
// Using Object.assign() method

const cars = {
    model: 'tesla',
    type: 'electric car',
    release: 2020,
}
console.log(cars)

const carTwo = Object.assign({}, cars);

console.log(carTwo)



// Using the Spread Syntax
const carThree = {...cars};
console.log (carThree)



// Using JSON.parse(JSON.stringify()) method
const fourthCar = JSON.parse(JSON.stringify(cars));
console.log(fourthCar)


//Enumeration of Properties in an Object
// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 
 // Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
//  ’Omoyele Sowore is the presidential candidate of AAC’
 
// for (const key in presidentialCandidates){
//     console.log(key);
//     console.log(presidentialCandidates[key])
// }

// for (let values of Object.values(presidentialCandidates))
// console.log(values);


for (const key in presidentialCandidates){
    console.log(presidentialCandidates[key] + ' is the presidential candidate of '+ [key])
}

