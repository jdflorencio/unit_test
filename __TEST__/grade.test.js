const {average2, average3} = require('./../grade')


describe("Checking studen grade", () => {
    it("should return true for grades 6, 7 and 5", () => {
        expect(average2(6,7,5)).toBeTruthy()
    })

    it("should return false for grades 3,5,4", () => {
        expect(average2(3,5,4)).toBeFalsy()
    })

})


describe("Checking studen grade", () => {
    it("should check if the average of the grades 7,8 and 7 is greater 6", () => {
        expect(average3(7,8,6)).toBeGreaterThan(6)
    })

    it("should check if the average of the grades 6 is greate then or equal to 6", () => {
        expect(average3(6,6,6)).toBeGreaterThanOrEqual(6)
    })
})

