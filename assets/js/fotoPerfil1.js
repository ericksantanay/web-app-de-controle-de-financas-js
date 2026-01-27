//############# SAIDAS ##################
const foto = document.getElementById('foto-de-perfil')
const inputfile = document.getElementById('ifile')

//############# FUNÇÃO QUE MOSTRA O INPUT FILE ESCONDIDO ##################
function adicionarinput() {
    inputfile.click()
}

// Aqui é quando o usuario clicar vai acontecer tal coisa
inputfile.addEventListener('change', function() {
    const arquivo = this.files[0]

    if (arquivo) {
        const leitor = new FileReader()

        leitor.onload = function(e) {
            const imagemEmTexto = e.target.result;

            foto.src = imagemEmTexto

            localStorage.setItem('FotoDePerfilInicio', JSON.stringify(imagemEmTexto))
        }

        leitor.readAsDataURL(arquivo)
    }

})

    const fotoSalva = JSON.parse(localStorage.getItem('FotoDePerfilInicio'))

    if (fotoSalva) {
        foto.src = fotoSalva
    }