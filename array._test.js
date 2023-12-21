const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite'
];


test('a lista de compras tem leite nela', () => {
    expect(shoppingList).toContain('leite')
    expect(new Set(shoppingList)).toContain('leite')
})