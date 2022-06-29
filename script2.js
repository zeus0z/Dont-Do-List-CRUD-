class ContaBancaria  {
    constructor (agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo (){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo=valor;
    }

    sacar (valor) {
        if (valor > this._saldo){
            return 'Tu não tem esse dinheiro todo'
        }
        
        this._saldo = this._saldo - valor;
        return this._saldo;
        
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }



}

class ContaCorrente extends ContaBancaria {

    constructor(agencia,numero,saldo,cartao){
        super(agencia,numero,saldo);
        this.tipo = 'corrente';
        this._cartao = cartao; 
    }

    get cartao (){
        return this._cartao;
    }

    set cartao(valor){
        this._cartao= valor;
         
    }


} 

class ContaPoupança extends ContaBancaria {
    constructor (agencia,numero,saldo){
    super(agencia,numero,saldo);
    this.tipo= 'Poupança';  
    }


}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia,numero,saldo){
        super(agencia,numero,saldo);
        this.tipo='Conta Universitaria';
    }

    saque (valor) {
        valor>500 ? 'Digite um valor menor';
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}