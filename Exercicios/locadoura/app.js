import LocadoraController from './Controller/LocadoraController.js'

const locadoraController = new LocadoraController()
let carros = locadoraController.locadora.listarCarros()
let clientes = locadoraController.locadora.listarClientes()


// Função para atualizar a lista de carros na página
function atualizarListaCarros() {
    const listaCarros = document.getElementById('listaCarros')
    listaCarros.innerHTML = '' // Limpa a lista antes de atualizar

    for (const placa in carros) {
        const carro = locadoraController.locadora.carros[placa]
        const li = document.createElement('li')
        li.textContent = `Placa: ${carro.placa}, Disponível: ${carro.disponivel ? 'Sim' : 'Não'}`

        const btnAlugar = document.createElement('button')
        btnAlugar.textContent = 'Alugar'
        btnAlugar.onclick = () => alugarCarro(carro)

        const btnDevolver = document.createElement('button')
        btnDevolver.textContent = 'Devolver'
        btnDevolver.onclick = () => devolverCarro(carro)

        const btnInformacoes = document.createElement('button')
        btnInformacoes.textContent = 'Informações'
        btnInformacoes.onclick = () => getInformacoesCarro(carro)

        const btnHistorico = document.createElement('button')
        btnHistorico.textContent = 'Histórico'
        btnHistorico.onclick = () => listarHistorico(carro)

        li.appendChild(btnAlugar)
        li.appendChild(btnDevolver)
        li.appendChild(btnInformacoes)
        li.appendChild(btnHistorico)
        listaCarros.appendChild(li)
    }
}

// Função para atualizar a lista de clientes na página
function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes')
    listaClientes.innerHTML = '' // Limpa a lista antes de atualizar

    for (const cpf in clientes) {
        const cliente = locadoraController.locadora.clientes[cpf]
        const li = document.createElement('li')
        li.textContent = `Nome: ${cliente.nome}, CPF: ${cliente.cpf}`

        const btnInformacoes = document.createElement('button')
        btnInformacoes.textContent = 'Informações'
        btnInformacoes.onclick = () => getInformacoesCliente(cliente)

        const btnCarrosAlugados = document.createElement('button')
        btnCarrosAlugados.textContent = 'Carros alugados'
        btnCarrosAlugados.onclick = () => carrosAlugados(cliente)

        li.appendChild(btnInformacoes)
        li.appendChild(btnCarrosAlugados)
        listaClientes.appendChild(li)
    }
}

// Função para alugar um carro
function alugarCarro(carro) {
    const clienteCPF = prompt("Digite o CPF do cliente para alugar o carro:")
    const cliente = locadoraController.locadora.clientes[clienteCPF]

    if (cliente) {
        const resultado = locadoraController.alugar(carro, cliente)
        alert(resultado)
        atualizarListaCarros()
    } else {
        alert("Cliente não encontrado!")
    }
}

// Função para devolver um carro
function devolverCarro(carro) {
    const clienteCPF = prompt("Digite o CPF do cliente para devolver o carro:")
    const cliente = locadoraController.locadora.clientes[clienteCPF]

    if (cliente) {
        const resultado = locadoraController.devolver(carro, cliente)
        alert(resultado)
        atualizarListaCarros()
    } else {
        alert("Cliente não encontrado!")
    }
}

// ------------------------------------------------------------------------------------------- TERMINAR AQUI DPS ------------------------------------------------------------------------
function getInformacoesCarro(carro){
    console.log(carro.getInformacoes())
}

function getInformacoesCliente(cliente){
    console.log(cliente.getInformacoes())
}

function listarHistorico(carro){
    console.log(carro.listarHistorico())
}

function carrosAlugados(cliente){
    console.log(cliente.listarCarrosAlugados())
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Capturando o formulário de carro e adicionando um listener de evento
document.getElementById('carroForm').addEventListener('submit', function(event) {
    event.preventDefault() // Previne o comportamento padrão do formulário

    const marca = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value
    const placa = document.getElementById('placa').value
    const disponivel = document.getElementById('disponivel').checked // true ou false

    locadoraController.locadora.addCarro(marca, modelo, placa, disponivel)
    atualizarListaCarros()

    event.target.reset() // Limpa os campos do formulário
})

// Capturando o formulário de cliente e adicionando um listener de evento
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault() // Previne o comportamento padrão do formulário

    const nome = document.getElementById('nome').value
    const cpf = document.getElementById('cpf').value

    locadoraController.locadora.addCliente(nome, cpf)
    atualizarListaClientes()

    event.target.reset() // Limpa os campos do formulário
})
