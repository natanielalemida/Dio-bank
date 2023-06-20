import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (value: number): void => {
		if (this.getStatus()) {
			if (value > 0) {
				this.balance += value;
				console.log('Empréstimo concedido. Saldo atualizado:', this.balance);
			} else {
				console.log('Valor inválido para empréstimo');
			}
		} else {
			console.log('Conta não está ativa. Empréstimo não pode ser concedido.');
		}
	};
}
