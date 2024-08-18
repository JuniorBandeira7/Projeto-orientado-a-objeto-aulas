import Locadora from "../Model/Locadora.js"

class LocadoraController {
    constructor() {
        this.locadora = new Locadora()
    }

    alugar(carro, cliente) {
        if (!carro.disponivel) { 
            return "Carro não disponível"
        } else {
            const dataAtual = new Date() 
            carro.alugar(cliente, dataAtual)
            cliente.alugarCarro(carro, dataAtual)

            return "Carro alugado com sucesso!"
        }
    }

    devolver(carro, cliente) {
        if (carro.disponivel) {  
            return "Carro já devolvido"
        } else {
            const dataAtual = new Date()  
            carro.devolver(cliente, dataAtual)
            cliente.devolverCarro(carro)

            return "Carro devolvido com sucesso!"
        }
    }
}

export default LocadoraController
