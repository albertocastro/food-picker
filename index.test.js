const { expect } = require("@jest/globals")
const getRestaurant = require("./index")

describe("Get Restaurant",()=>{
    let restaurants = null
    beforeEach(()=>{
        restaurants = [
            "chick-fil-a",
            "five guys",
            "panera bread",
            "chipotle",
            "tacos tijuana",
        ]
    })
    it("should give me a restaurant",()=>{
        
        const myRestaurant = getRestaurant(restaurants)

        expect(restaurants).toContain(myRestaurant)
    })
    it("should give me false if I send an empty array",()=>{
        
        const myRestaurant = getRestaurant([])

        expect(myRestaurant).toBe(false)
    })
    it("should give me false if I send anything but an array",()=>{
        
        expect(getRestaurant()).toBe(false)
        expect(getRestaurant("fdsfds")).toBe(false)
        expect(getRestaurant(5)).toBe(false)
        expect(getRestaurant({})).toBe(false)
    })
    it("should never repeat",()=>{
        
        let visitedRestaurants = []
        for(let i=0;i<restaurants.length;i++){

            const restaurant = getRestaurant(restaurants,visitedRestaurants)
            expect(visitedRestaurants).not.toContain(restaurant)

            visitedRestaurants.push(restaurant)
        }
    })
    it("should show a message when no restaurant is available",()=>{
        
        expect(getRestaurant(restaurants,restaurants)).toBe("No restaurants available")
    
    })

})