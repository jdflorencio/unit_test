const PersonFactory = require('../person_factory')
const { Person, Client, Employee } = require("./../person")

let factory = new PersonFactory()

describe("Factory of Person", () => {
    test("not passing the parameters should return null", () => {
        expect(factory.getPerson()).toBeNull()
    })

    test("passing the invalid parameters must  return null", () => {
        expect(factory.getPerson("admin")).toBeNull()
    })

    test("passing the parameters 'client' should return a new client object", () => {
        expect(factory.getPerson("client")).toBeInstanceOf(Client)
    })

    test("passing the parameters 'Employee' should return a new employee object", () => {
        expect(factory.getPerson("employee")).toBeInstanceOf(Employee)
    })
})