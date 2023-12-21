const Person = require("../Person")

var paulo = new Person(
    "Paulo Gilberto da Silva",
    "paulo.gilberto@gmail.com",
    new Date(1987, 8, 18)
)

var objTest = new Person(
    "Paulo Gilberto da Silva",
    "paulo.gilberto@gmail.com",
    new Date(1987, 8, 18)
)


test("should check if the object paulo equal the object test", () => {
    expect(paulo).toEqual(objTest)
})