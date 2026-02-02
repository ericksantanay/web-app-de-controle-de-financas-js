//SAIDAS 
// SAIDA DA FOTO
const fotoPerfil = document.getElementById('img-foto-saida')

const ipFile = document.getElementById('ifoto')

// SAIDA DO NOME 
const resultadoNome = document.querySelector('.resultado-nome-perfil')

// SAIDA DO NOME DO INICIO
const resultadoNomeInicio = document.getElementById('resultado-nome-inicio')

//ITENS QUE IRÃO RECEBER O DISPLAY NONE 
const imgEditarNome = document.querySelector('.imagem-config')

const h2EditarNome = document.getElementById('editar-o-nome') 






//########################## IMAGEM DE PERFIL #####################################
// FUNÇÃO QUE ABRE O INPUT FILE DISCRETO
function mostrarFoto() {
    ipFile.click()
}

ipFile.addEventListener('change', function() {
    const arquivo = this.files[0]

    // SE O ARQUIVO EXISTIR
    if (arquivo) {

        //VAI LER O ARQUIVO
        const leitor = new FileReader()

        // AQUI É QUANDO O ARQUIVO TERMINAR DE SER LIDO
        leitor.onload = function (e) {
            const imgEmText = e.target.result

            // AQUI VOU MOSTRAR A FOTO
            fotoPerfil.src = imgEmText

            // AQUI EU VOU SALVAR A FOTO
            localStorage.setItem('FotoPerfilHome', imgEmText)
        }

        // AQUI INICIA A LEITURA DO ARQUIVO
        leitor.readAsDataURL(arquivo)

    }
})

    const imgSalva = localStorage.getItem('FotoPerfilHome')

    if (imgSalva) {
        fotoPerfil.src = imgSalva
    }


//########################## NOME DO PERFIL #####################################

function editarNome() {
    imgEditarNome.style.display = 'none' 
    h2EditarNome.style.display  = 'none'

    inputNome.style.display = 'block' 
    salvarNome.style.display = 'block'
}