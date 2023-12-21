const  Product  = require('./../product');

describe("Teste on production", () => {
    let product = new Product();
    product.description = "leite"

    it("should return that stock property is undefined", () => {
        expect(product.stock).toBeUndefined();
    })

    it("should return that the  description is defined", () => {
        expect(product.description).toBeDefined();
    })

})