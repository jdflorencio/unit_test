const users = require('../users');

describe("Checking length of items fo array", () => {
    
    test("should check if array has 3 items", () => {
        expect(users).toHaveLength(3);
    })
    
    test("should check if index array item 2 is 4 caracteres", () => {
        expect(users[2]).toHaveLength(4);
    })

    test("should check if array not has 4 items", () => {
        expect(users).not.toHaveLength(4);
    })
})