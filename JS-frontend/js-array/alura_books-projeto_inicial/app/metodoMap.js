function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosDescontos = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco*desconto)}
    })
    return livrosDescontos
}