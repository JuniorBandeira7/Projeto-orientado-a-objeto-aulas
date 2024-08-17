import Locadora  from "../Model/Locadora";
import Carro from "../Model/Carro";
import Cliente from "../Model/Cliente";
const date = new Date()

class LocadoraController {
    constructor() {
        this.locadora = new Locadora()
    }

    alugar(carro, cliente){
        if(carro.disponivel = false){
            return "Carro não disponível"
        }else{
            carro.alugar(cliente, date)
            cliente.alugarCarro(carro, date)

            return
        }
    }

    devolver(carro, cliente){
        if(carro.disponivel = true){
            return "Carro já devolvido"
        }else{
            carro.devolver(cliente, date)
            cliente.devolverCarro(carro)
        }

        return
    }
}