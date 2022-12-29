let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenaPorPreco)

function ordenaPorPreco() {
   let livrosOrdenados =  livros.sort((a,b)=>a.preco - b.preco)
   exibirLivros(livrosOrdenados)
}