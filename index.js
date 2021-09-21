function getRestaurant(restaurants,previouslyVisited){
    //VALIDATION       
    if(previouslyVisited === undefined){
        previouslyVisited = []
    }
    if(!Array.isArray(restaurants)){
        return false
    }
    if(!Array.isArray(previouslyVisited)){
        return false
    }
   if(restaurants.length === 0){
       return false
   }

    //-------------------------------------

    // LOGIC 
    const filteredRestaurants = restaurants.filter(item =>
         previouslyVisited.indexOf(item) === -1
         );

    
     if(filteredRestaurants.length === 0 ){
         return "No restaurants available"
     }
     
     const random = Math.floor(Math.random()* filteredRestaurants.length);
    
    return filteredRestaurants[random]
    //---------------------------------
        
   
}
// --------------------------------
const listOfRestaurants = [
    "chick-fil-a",
    "five guys",
    "panera bread",
    "chipotle",
    "tacos tijuana",
]
console.log(getRestaurant(listOfRestaurants,[

    "tacos tijuana",
    "five guys",
    "tacos tijuana",
    "chipotle",
    "chick-fil-a",
    "panera bread",

]))

console.log(getRestaurant({},[

    "tacos tijuana",
    "five guys",
    "tacos tijuana",
    "chipotle",
    "chick-fil-a",
    "panera bread",

]))

console.log(getRestaurant(5,5))

module.exports = getRestaurant

