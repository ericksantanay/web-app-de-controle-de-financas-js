//ABAS QUE VAO APARECER E SUMIR
const header = document.getElementById('cabecalho')
const PrimeiraSecao = document.getElementById('secao-do-home')
const terceiraSecao = document.getElementById('secao-adicionar-gasto')
const secaoPerfil = document.getElementById('secao-perfil')


//SAIDAS DAS CORES 
const menuInicio = document.getElementById('menuInicio')
const historicMoviment = document.getElementById('historico-movimentacao')
const movimentacaoAdicionar = document.getElementById('movimentacao-adicionar')
const Perfil = document.querySelector('.menu')


menuInicio.style.backgroundColor = '#6d28d9'

function inicioMenu() {
    menuInicio.style.backgroundColor = '#6d28d9'
    historicMoviment.style.backgroundColor = 'white'
    movimentacaoAdicionar.style.backgroundColor = 'white'
    Perfil.style.backgroundColor = 'white'

     // AQUI SAO OS QUE VAO APARECER 
    header.style.display = 'block'
    PrimeiraSecao.style.display = 'block'
    terceiraSecao.style.display = 'none'
    secaoPerfil.style.display = 'none'
    
}


function historicoMenu() {
    historicMoviment.style.backgroundColor = '#6d28d9'
    menuInicio.style.backgroundColor = 'white'
    movimentacaoAdicionar.style.backgroundColor = 'white'
    Perfil.style.backgroundColor = 'white'
}


function adicionarMovimentacaoMenu() {
    movimentacaoAdicionar.style.backgroundColor = '#6d28d9'
    historicMoviment.style.backgroundColor = 'white'
    menuInicio.style.backgroundColor = 'white'
    Perfil.style.backgroundColor = 'white'

    
    terceiraSecao.style.display = 'block'
    header.style.display = 'none'
    PrimeiraSecao.style.display = 'none'
    

}




function perfilMenu() {
    Perfil.style.backgroundColor = '#6d28d9'
    movimentacaoAdicionar.style.backgroundColor = '#white'
    historicMoviment.style.backgroundColor = 'white'
    menuInicio.style.backgroundColor = 'white'





    // AQUI SAO OS QUE VAO APARECER 
    secaoPerfil.style.display = 'block'
    header.style.display = 'none'
    PrimeiraSecao.style.display = 'none'
    terceiraSecao.style.display = 'none'
    
}