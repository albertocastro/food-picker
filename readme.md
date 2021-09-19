# Food Picker
Create a function that returns a restaurant to eat from randomly. 
- It should give a different restaurant every time
- Not repeat until all restaurants have been previously given

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

restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // five guys 

restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // chick-fil-a

restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // tacos tijuana

restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // panera bread

restaurant = getRestaurant(listOfRestaurants);
console.log(restaurant) // chick-fil-a

```