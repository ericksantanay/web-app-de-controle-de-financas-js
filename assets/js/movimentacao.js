// Localstorage Saldo
const saldoSaidaEentradas = JSON.parse(localStorage.getItem('saldoSaidaEentradas')) || []

let historicoMovimentacaoArray = JSON.parse(localStorage.getItem('Movimentacao')) || []


//############ SAIDAS ###############
// SAIDA DO SALDO 
const resultadoSaldo = document.getElementById('resultado-do-saldo')

// SAIDA DAS ENTRADAS 
const resultadoEntradas = document.getElementById('resuldado-da-entrada')

// SAIDA DAS SAIDAS 
const resultadoSaidas = document.getElementById('resultado-da-saida')

//SAIDA DO HISTORICO
let resultadoHistorico = document.getElementById('container-dos-cards')
let saidaImagem = document.querySelector('.img-categoria')
let NomeMovimentacao = document.querySelector('.nome-da-movimentacao')
let resultadoCategoria = document.querySelector('.resultado-categoria')
let resultadoValor = document.querySelector('.resultado-do-valor')
let resuldadoData = document.querySelector('.resultado-data')


//SAIDA DA IMAGEM
let resultadoImagem = document.querySelector('.img-categoria')



// Acumulador
let saldoConta = 0 

let saldoTotaldaentrada = 0


// FUNÇÃO DE ADICIONAR OS GASTOS ETC
function adicionarMovimentacao() {
    // INPUT NOME DO GASTO
    let nomeGasto = document.getElementById('inomegasto').value

    // INPUT VALOR DO GASTO
    const valorGasto = Number(document.getElementById('igasto').value)

    // INPUT CATEGORIA
    let categoriaSelect = document.getElementById('categoria').value

    // INPUT DATA DO GASTO
    const dataDoGasto = document.getElementById('idata').value


    // Fazendo verificação dos campos 
    if (nomeGasto === '' ||  categoriaSelect === '' || dataDoGasto === '') {
        alert('Preencha os campos!')
        return
    }


    // Verificando se a data esta nao vai passar de 8 digitos
    if (dataDoGasto.length > 10) {
        alert('Escreva a data correta!')
        return
    }

    // Dados
    let dados = {
        nomeGasto: nomeGasto,
        valor: valorGasto,
        categoria: categoriaSelect,
        data: dataDoGasto
    }

    // Colocando o obj no array
    saldoSaidaEentradas.push(dados)
    historicoMovimentacaoArray.push(dados)

    
    // Escolhendo a categoria salario e salvando no localstorage
    if (categoriaSelect === 'Salario') {
        localStorage.setItem('saldoSaidaEentradas', JSON.stringify(saldoSaidaEentradas))
        resultadoValor.style.color = '#16a34a'
         resultadoImagem.src = 'assets/image/icones historico/mala.png'

    }

    // SE NAO FOR SALARIO É CONSIDERADO GASTO
    if (categoriaSelect !== 'Salario') {
        resultadoValor.style.color = '#ef4444'
    }

    //CONDIÇÃO PARA TROCAR A IMAGEM CONFORME A CATEGORIA
    //CATEGORIA TRANSPORTE
    if (categoriaSelect === 'transporte') {
        resultadoImagem.src = 'assets/image/icones historico/carro.png'
    }


    //CATEGORIA ALIMENTAÇÃO
    if (categoriaSelect === 'alimentacao') {
        resultadoImagem.src = 'assets/image/icones historico/hamburguer.png'
    }


    //CATEGORIA MORADIA
    if (categoriaSelect === 'moradia') {
        resultadoImagem.src = 'assets/image/icones historico/casa.png'
    }

     //CATEGORIA LAZER
    if (categoriaSelect === 'lazer') {
        resultadoImagem.src = 'assets/image/icones historico/controle de video game.png'
    }


     //CATEGORIA LAZER
    if (categoriaSelect === 'outros') {
        resultadoImagem.src = 'assets/image/icones historico/caixa.png'
    }


    //Limpando os campos
    document.getElementById('inomegasto').value = ''

    
    document.getElementById('igasto').value = ''

 
    document.getElementById('categoria').value = ''

    
   document.getElementById('idata').value = ''

    atualizarLista()
   
}


// Função de que atualiza e renderiza
const atualizarLista = () => {
    // Zerando o saldo 
    saldoConta = 0

    // Foreach, vai percorrer o array
    saldoSaidaEentradas.forEach((item, indice) => {

        // Aqui é o item salvo no array
        let SaldoValor = item.valor

        // Aqui esta acumulando o valor do saldo
        saldoConta += SaldoValor

        //Conta para saber quando esta entrando e somando com o que já tem nas entradas 
        let contaSaida = saldoConta + saldoTotaldaentrada

        //Tranformando em forma BR as entradas
        let entradasFormato = contaSaida.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })


        // Tranformando em valor BR
        const saldoFormatado = saldoConta.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })


        // Mostrando no html
        // Mostrando o saldo
        resultadoSaldo.innerText = saldoFormatado

        //Mostrando as entradas
        resultadoEntradas.innerText = entradasFormato


    });
    //

    //ForEach do historico

    historicoMovimentacaoArray.forEach(item => {
        resultadoHistorico += 
        `   
            <div class="cards"> 
                <div class="left-card">
                    <img class="img-categoria" src="assets/image/icones historico/casa.png" alt="ICONE DA MOVIMENTACAO">
                    <div class="container-das-saidas-nome-e-categoria">
                        <h2 class="nome-da-movimentacao">${}</h2>
                        <h3 class="resultado-categoria">${}</h3>
                    </div>
                </div>


                <div class="right-card">
                    <p class="resultado-do-valor">${}</p>
                    <p class="resultado-data">${}</p>
                </div>

            </div>

        `

    });

     

}

atualizarLista()



