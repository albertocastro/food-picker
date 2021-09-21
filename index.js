function getRestaurant(restaurants,previouslyVisited){
    //VALIDATION       
        if(previouslyVisited === undefined){
        previouslyVisited = [];
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
     };
     
    const random = Math.floor(Math.random()* filteredRestaurants.length);
    
        return filteredRestaurants[random]
  
        
   
};


module.exports = getRestaurant