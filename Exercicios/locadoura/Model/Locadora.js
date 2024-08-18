import Carro from "./Carro.js"
import Cliente from "./Cliente.js"

class Locadora {
    constructor() {
        this.carros = {}
        this.clientes = {}
    }

    addCarro(marca, modelo, placa, disponivel){
        this.carros[placa] = new Carro(marca, modelo, placa, disponivel);
        return
    }

    addCliente(nome, cpf){
        this.clientes[cpf] = new Cliente(nome, cpf);
        return
    }

    listarCarros(){
        return this.carros
    }

    listarClientes(){
        return this.clientes
    }
}

export default Locadora