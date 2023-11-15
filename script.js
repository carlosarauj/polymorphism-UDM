function Conta (agencia, saldo, conta){
  this.agencia = agencia
  this.saldo = saldo
  this.conta = conta
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    this.verSaldo()
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.depositar = function(valor){
  this.saldo += valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function(){
  console.log(`Agência/Banco: ${this.agencia}/${this.conta} | ` +
  `Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia,conta,saldo)
  this.limite = limite
}

  ContaCorrente.prototype = Object.create(Conta.prototype)
  ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log('Saldo insuficiente: ' + this.saldo)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

let contacorrente = new ContaCorrente(10, 40, 60, 80)
contacorrente.depositar(100)
contacorrente.sacar(101)
