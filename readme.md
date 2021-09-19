# Food Picker
Create a function that returns a restaurant to eat from randomly. 
- It should give a different restaurant every time
- Not repeat until all restaurants have been previously given
- Function will recieve an array with the visited restaurants
- It should return "No restaurant available" if all restaurants have been visited
## Usage

```JS
const listOfRestaurants = [
    "chick-fil-a",
    "five guys",
    "panera bread",
    "chipotle",
    "tacos tijuana",
]
const restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // chipotle

restaurant = getRestaurant(listOfRestaurants,["chipotle"]);
console.log(restaurant) // five guys 

restaurant = getRestaurant(listOfRestaurants,["chipotle","five guys"]);
console.log(restaurant) // chick-fil-a

restaurant = getRestaurant(listOfRestaurants,["chipotle","five guys","chick-fil-a"]);
console.log(restaurant) // tacos tijuana

restaurant = getRestaurant(listOfRestaurants,["chipotle","five guys","chick-fil-a","tacos tijuana"]);
console.log(restaurant) // panera bread

restaurant = getRestaurant(listOfRestaurants,["chipotle","five guys","chick-fil-a","tacos tijuana","panera bread"]);
console.log(restaurant) // No restaurants available


```