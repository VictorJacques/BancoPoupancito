class Conta {
  #senha;
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = senha;
  }
  deposito() {
    let toDeposit = parseFloat(prompt("Qual valor gostaria de depositar"));
    if (prompt("Qual a sua senha?") == this.#senha) {
      this.saldo += toDeposit;
      console.log(this.saldo);
    } else {
      alert("Senha inválida!");
    }
  }
  retirada(money) {
    let toWithdrawl = parseFloat(prompt("Qual valor gostaria de retirar?"));
    if (prompt("Qual a sua senha?") == this.#senha) {
      this.saldo -= toWithdrawl;
      console.log(this.saldo);
    } else {
      alert("Senha inválida!");
    }
  }
  trocarSenha(novaSenha) {
    this.#senha = novaSenha;
  }
}

const contaCorrente = new Conta(20, 1234);
contaCorrente.deposito();
contaCorrente.retirada();
