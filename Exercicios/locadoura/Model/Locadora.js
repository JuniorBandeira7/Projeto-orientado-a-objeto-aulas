class Locadora {
    constructor() {
        this.carros = []
        this.clientes = []
    }

    addCarro(carro){
        this.carros.push(carro)
        return
    }

    addCliente(cliente){
        this.clientes.push(cliente)
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