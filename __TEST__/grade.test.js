const avarege = require('./../grade')

describe("Checking studen grade", () => {
    it("should return true for grades 6, 7 and 5", () => {
        expect(avarege(6,7,5)).toBeTruthy()
    })

    it("should return false for grades 3,5,4", () => {
        expect(avarege(3,5,4)).toBeFalsy()
    })

})