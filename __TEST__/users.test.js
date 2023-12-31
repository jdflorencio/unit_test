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

    it("should check if the array contains the user Maria", () => {
        expect(users).toContain("Maria")
    })

    it("should check if the array does not contains the user Júlio", () => {
        expect(users).not.toContain("Júlio")
    })

    /*
        Nessa aula aprenderemos a utilizar a asserção arraycontaining, as qual nos permitirá comparar se um conjunto de elementos está contido em um determinado array.
    */
    it("should check if the array contains all the items in another array", () => {
        let expectArray = ["José", "Maria", "Enya Agatha"] 

        expect(users).toEqual(expect.arrayContaining(expectArray))
    })
})


