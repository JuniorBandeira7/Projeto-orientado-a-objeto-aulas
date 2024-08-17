
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
        this.carrosAlugados = []
    }

    getInformacoes(){
        informacoes = [this.nome, this.cpf]

        return informacoes
    }

    alugarCarro(carro, dataAluguel){
        this.disponivel = false

        this.carrosAlugados.push({
            status: 'Alugou',
            nome: carro,
            data: dataAluguel
        });
        
        return
    }

    devolverCarro(carro){
        this.disponivel = false

        const indiceCarro = this.carrosAlugados.findIndex(carro.placa)

        this.carrosAlugados.splice(indiceCarro, 1)

        return
    }

    listarCarrosAlugados(){
        return this.carrosAlugados
    }
}

export default Cliente