
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
        this.carrosAlugados = []
    }

    getInformacoes(){
        let informacoes = [this.nome, this.cpf]

        return informacoes
    }

    alugarCarro(carro, dataAluguel){
        this.disponivel = false

        this.carrosAlugados.push({
            status: 'Alugou',
            placa: carro.placa,
            data: dataAluguel
        });
        
        return
    }

    devolverCarro(carro){
        this.disponivel = false

        const indiceCarro = this.carrosAlugados.findIndex(carroAlugado => carroAlugado.placa === carro.placa)

        if (indiceCarro !== -1) {
            this.carrosAlugados.splice(indiceCarro, 1);
        }

        return
    }

    listarCarrosAlugados(){
        return this.carrosAlugados
    }
}

export default Cliente