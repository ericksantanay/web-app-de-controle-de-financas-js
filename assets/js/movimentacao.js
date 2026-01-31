// Localstorage Saldo
const saldoSaidaEentradas = JSON.parse(localStorage.getItem('saldoSaidaEentradas')) || []


//############ SAIDAS ###############
// SAIDA DO SALDO 
const resultadoSaldo = document.getElementById('resultado-do-saldo')

// SAIDA DAS ENTRADAS 
const resultadoEntradas = document.getElementById('resuldado-da-entrada')

// SAIDA DAS SAIDAS 
const resultadoSaidas = document.getElementById('resultado-da-saida')


let saldoConta = 0 

let saldoTotaldaentrada = 0

let indice = 0


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
        categoria: categoriaSelect
    }

    // Colocando o obj no array
    saldoSaidaEentradas.push(dados)

    
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

    // Foreach, vai percorrer o array
    saldoSaidaEentradas.forEach((item, indice) => {

     // Aqui é o item salvo no array
    let SaldoValor = item.valor

    // Aqui esta acumulando o valor do sqldo
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

     

}

atualizarLista()



