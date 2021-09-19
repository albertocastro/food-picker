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
        
        let hashmap = {}
         restaurants.map((restaurant,i)=>{
            const result =  getRestaurant(restaurants)
            if(!hashmap[result]){
                expect(hashmap[result]).toBe(undefined)
                hashmap[result] = true
            }else{
                
                throw new Error(result+i+" repeated");
            }
            
        })
    

    })

})