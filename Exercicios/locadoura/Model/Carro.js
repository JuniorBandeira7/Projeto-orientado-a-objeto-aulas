class Carro {
    constructor(marca, modelo, placa, disponivel) {
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.disponivel = disponivel
        this.historicoDeClientes = []
    }

    getInformacoes(){
        let informacoes = [this.marca, this.modelo, this.placa, this.disponivel]

        return informacoes
    }

    alugar(cliente, dataAluguel){
        this.disponivel = false

        this.historicoDeClientes.push({
            status: 'Alugou',
            cliente: cliente.nome,
            data: dataAluguel
        });
        
        return
    }

    devolver(cliente, dataDevolucao){
        this.disponivel = true

        this.historicoDeClientes.push({
            status: 'Devolveu',
            cliente: cliente.nome,
            data: dataDevolucao
        });

        return
    }

    listarHistorico(){
        return this.historicoDeClientes
    }
}

export default Carro