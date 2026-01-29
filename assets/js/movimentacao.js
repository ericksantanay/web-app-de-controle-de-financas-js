// LocalStorage 
const saldoUsuario = JSON.parse(localStorage.getItem('salario'))  || 0




//############ SAIDAS ###############
// SAIDA DO SALDO 
const resultadoSaldo = document.getElementById('resultado-do-saldo')

// SAIDA DAS ENTRADAS 
const resultadoEntradas = document.getElementById('resuldado-da-entrada')

// SAIDA DAS SAIDAS 
const resultadoSaidas = document.getElementById('resultado-da-saida')





// FUNÇÃO DE ADICIONAR OS GASTOS ETC
function adicionarMovimentacao() {
    // INPUT NOME DO GASTO
    let nomeGasto = document.getElementById('inomegasto').value

    // INPUT VALOR DO GASTO
    const valorGasto = document.getElementById('igasto').value

    // INPUT CATEGORIA
    const categoriaSelec = document.getElementById('categoria').value

    // INPUT DATA DO GASTO
    const dataDoGasto = document.getElementById('idata').value


    // Fazendo verificação dos campos 
    if (nomeGasto === '' || valorGasto === '' || categoriaSelec === '' || dataDoGasto === '') {
        alert('Preencha os campos!')
        return
    }


    // Verificando se a data esta nao vai passar de 8 digitos
    if (dataDoGasto.length > 10) {
        alert('Escreva a data correta!')
        return
    }

    if (categoriaSelec === 'Salario') {
        
        resultadoSaldo.innerText = valorGasto

        localStorage.setItem('salario', JSON.stringify(valorGasto))
    }


    // Zerando os campos após a digitação 


    nomeGasto = document.getElementById('inomegasto').value = ''

   
    valorGasto = document.getElementById('igasto').value =  ''



}