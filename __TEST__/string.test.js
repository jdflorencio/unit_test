test('Não Existe I em team', () =>{
    expect('team').not.toMatch(/I/)

})

test('mas existe "stop" em ', () => {
    expect('Christoph').toMatch(/stop/);
})