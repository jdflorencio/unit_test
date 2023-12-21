const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})


test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4);
})

test('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2 })
})

test('adicionando número positivos não é zero', ()=> {
    for(let a = 1; a < 10; a++) {
        for (let b = 1; b < 10 ; b++) {

            expect(a + b).not.toBe(0)
        }
    }
})

test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})


test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull(); //ser nulo
    expect(z).toBeDefined(); //a ser definida
    expect(z).not.toBeUndefined(); //não ser indefinido
    expect(z).not.toBeTruthy(); //não ser verdadeiro
    expect(z).toBeFalsy() //ser falso
})

test('dois mais dois', () => {
    const value = sum(2, 2);
    expect(value).toBeGreaterThan(3);  //ser maior que
    expect(value).toBeGreaterThanOrEqual(3.5) //ser maior ou igual
    expect(value).toBeLessThan(5); //ser menor que
    expect(value).toBeLessThanOrEqual(4.5); //ser menor ou igual

    //tobe e toEqual são equivalentes para números

    expect(value).toBe(4);
    expect(value).toEqual(4);
})

/*
    Para igualdade de ponto flutuante, 
    use toBeCloseTo em vez de toEqual, 
    porque você não quer um teste dependa 
    de um pequeno erro de arredondamento.
*/

test('adicionando números de ponto flutuante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);     
    //Isso não vai funcionar por causa de um erro de arredondamento

    expect(value).toBeCloseTo(0.3); // Estar perto de...
})

