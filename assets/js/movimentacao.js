//############ SAIDAS ###############
// SAIDA DO SALDO 
const resultadoSaldo = document.getElementById('resultado-do-saldo')

// SAIDA DAS ENTRADAS 
const resultadoEntradas = document.getElementById('resuldado-da-entrada')

// SAIDA DAS SAIDAS 
const resultadoSaidas = document.getElementById('resultado-da-saida')


let saltoTotaldaentrada = 0


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

    
    // Escolhendo a categoria salario e salvando no localstorage
    if (categoriaSelect === 'Salario') {

        localStorage.setItem('salarioUser', JSON.stringify(valorGasto))
         resultadoSaldo.innerText = valorGasto

        // Entradas 
        localStorage.setItem('entradasTotal', JSON.stringify(valorGasto))
        resultadoEntradas.innerText = valorGasto
    }


    //Limpando os campos
    document.getElementById('inomegasto').value = ''

    
    document.getElementById('igasto').value = ''

 
    document.getElementById('categoria').value = ''

    
   document.getElementById('idata').value = ''


    renderizacao()
}



// Função que renderiza o que aparece no html
const renderizacao = () =>  {
  
    // Saldo salvo
    let saldoSalvo = JSON.parse(Number(localStorage.getItem('salarioUser')) || [])
    
    const saldoFormatado = saldoSalvo.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    resultadoSaldo.innerText = saldoFormatado

    //
    let entradasSalvas = JSON.parse(Number(localStorage.getItem('entradasTotal')) || [])

    let contaDasEntradas = saltoTotaldaentrada + entradasSalvas

    let entradasFormatada = contaDasEntradas.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })



    resultadoEntradas.innerText = entradasFormatada

   

}
renderizacao()