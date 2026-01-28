//ABAS QUE VAO APARECER E SUMIR
const header = document.getElementById('cabecalho')
const PrimeiraSecao = document.getElementById('secao-do-home')
const terceiraSecao = document.getElementById('secao-adicionar-gasto')


//SAIDAS DAS CORES 
const menuInicio = document.getElementById('menuInicio')
const historicMoviment = document.getElementById('historico-movimentacao')
const movimentacaoAdicionar = document.getElementById('movimentacao-adicionar')



menuInicio.style.backgroundColor = '#6d28d9'

function inicioMenu() {
    menuInicio.style.backgroundColor = '#6d28d9'
    historicMoviment.style.backgroundColor = 'white'
    movimentacaoAdicionar.style.backgroundColor = 'white'

     // AQUI SAO OS QUE VAO APARECER 
    header.style.display = 'block'
    PrimeiraSecao.style.display = 'block'
    terceiraSecao.style.display = 'none'
    



}


function adicionarMovimentacaoMenu() {
    historicMoviment.style.backgroundColor = '#6d28d9'
    menuInicio.style.backgroundColor = 'white'
    movimentacaoAdicionar.style.backgroundColor = 'white'
}


function adicionarMovimentacaoMenu() {
    movimentacaoAdicionar.style.backgroundColor = '#6d28d9'
    historicMoviment.style.backgroundColor = 'white'
    menuInicio.style.backgroundColor = 'white'

    // AQUI SAO OS QUE VAO APARECER 
    terceiraSecao.style.display = 'block'
    header.style.display = 'none'
    PrimeiraSecao.style.display = 'none'

}