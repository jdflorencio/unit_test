const {average2, average3} = require('./../grade')


describe("Checking studen grade module 2", () => {
    it("should return true for grades 6, 7 and 5", () => {
        expect(average2(6,7,5)).toBeTruthy() //se verdadeiro

    })

    it("should return false for grades 3,5,4", () => {
        expect(average2(3,5,4)).toBeFalsy() //se falso

    })

})


describe("Checking studen grade module 3", () => {
    it("should check if the average of the grades 7,8 and 7 is greater 6", () => {
        expect(average3(7,8,6)).toBeGreaterThan(6) //ser maior que

    })

    it("should check if the average of the grades 6 is greate then or equal to 6", () => {
        expect(average3(6,6,6)).toBeGreaterThanOrEqual(6) //ser maior ou igual

    })
})


describe("Checking studen grade module 3 -", () => {
    it("should check if the average of the grades 4,3 and 8 is less than 6", () => {
        expect(average3(4,3,8)).toBeLessThan(6) //ser menor que

    })

    it("check if the average of the grades 8, 7 and 9 is less than or equal to ", () => { 
        expect(average3(6,6,6)).toBeGreaterThanOrEqual(6) //ser maior ou igual

    })
})


describe("Checking studen grade module 3 - Asserção toBeCloseTo", () => {
   
    it("should check if the average of the grades 4,3 and  6 is 4.33", () => {
        expect(average3(4,3,6)).toBeCloseTo(4.33) //ser menor que

    })

    it("should check if the avarage of the grades 5,5 and 6 is 5.3", () => { 
        expect(average3(5,5,6)).toBeCloseTo(5.3,1) //ser maior ou igual

    })
})

