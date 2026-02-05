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
let resuldadoData = document.querySelector('.resultado-data')


//SAIDA DO GRAFICO
const grafico = document.getElementById('grafico1');


// Acumulador
let saldoConta = 0 

let totalDeEntradas = 0

let totalDeSaidas = 0


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

    

    localStorage.setItem('Movimentacao', JSON.stringify(historicoMovimentacaoArray))


    // Escolhendo a categoria salario e salvando no localstorage
    if (categoriaSelect === 'Salario') {
        localStorage.setItem('saldoSaidaEentradas', JSON.stringify(saldoSaidaEentradas))
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
    totalDeSaidas = 0
    totalDeEntradas = 0

    resultadoHistorico.innerHTML = ''


    // Foreach, vai percorrer o array
    saldoSaidaEentradas.forEach(item => {

        // SE A CATEGORIA FOR IGUAL A SALARIO EU ADICIONO O SALDO
        if (item.categoria ===  'Salario') {

            // Aqui esta acumulando o valor do saldo
            saldoConta += item.valor
            totalDeEntradas += item.valor

            // Tranformando o (saldo) em valor BR
            const saldoFormatado = saldoConta.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })

             // Mostrando o saldo
            resultadoSaldo.innerText = saldoFormatado


            //AQUI EU ACUMULO O TOTAL DE ENTRADAS
            //Tranformando em forma BR as (entradas)
            let entradasFormato = totalDeEntradas.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })

            //Mostrando as entradas
            resultadoEntradas.innerText = entradasFormato
        }




        //########################################################
        // SE A CATEGORIA FOR DIFERENTE DE SALARIO  DIMINUIO O SALDO 
        if (item.categoria !== 'Salario') {
            //CONTA PARA DIMINUIR O SALDO CONFORME O GASTO
            
            saldoConta -= item.valor
            totalDeSaidas += item.valor
            
            let saldoFormatoBR = saldoConta.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })


            let saidaFormatoBR = totalDeSaidas.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })

            resultadoSaldo.innerText = saldoFormatoBR
            resultadoSaidas.innerText = saidaFormatoBR
        }


        localStorage.setItem('saldoSaidaEentradas', JSON.stringify(historicoMovimentacaoArray))
    });
    //



    //ForEach do historico
    historicoMovimentacaoArray.forEach(item => {
        resultadoHistorico.innerHTML += 
        `   
            <div class="cards"> 
                <div class="left-card">
                    <img class="img-categoria" 
     src="${
        item.categoria === 'Salario' ? 'assets/image/icones historico/mala.png' :
        item.categoria === 'transporte' ? 'assets/image/icones historico/carro.png' :
        item.categoria === 'alimentacao' ? 'assets/image/icones historico/hamburguer.png' :
        item.categoria === 'moradia' ? 'assets/image/icones historico/casa.png' :
        item.categoria === 'lazer' ? 'assets/image/icones historico/controle de video game.png' :
        'assets/image/icones historico/caixa.png'
     }"
     alt="ICONE DA MOVIMENTACAO">



                    <div class="container-das-saidas-nome-e-categoria">
                        <h2 class="nome-da-movimentacao">${item.nomeGasto}</h2>
                        <h3 class="resultado-categoria">${item.categoria}</h3>
                    </div>
                </div>


                <div class="right-card">
                    <p class="resultado-do-valor" style="color: ${item.categoria === 'Salario' ? 'green' : 'red'}">R$ ${item.valor.toFixed(2)}</p>
                    <p class="resultado-data">${item.data}</p>
                </div>

            </div>

        `

    });

     
    JSON.parse(localStorage.getItem('saldoSaidaEentradas'))
}
atualizarLista()


//########################### GRAFICO ########################


  new Chart(grafico, {
    type: 'bar',
    data: {
      labels: ['Gastos', 'Saldo'],
      datasets: [{
        label: 'Gastos',
        data: [totalDeSaidas, saldoConta],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });