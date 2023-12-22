const division = require("./../division")

describe("Checking exceptions", () => {
    it("should trow an exception", () => {
        expect(() => {
            expect(() => {
                division(25, 0)
            }).toThrow();
        })
    })

    it("hsould not throw an exception", () => {
        expect(() => {
            division(25, 2)
        }).not.toThrow();
    })

})