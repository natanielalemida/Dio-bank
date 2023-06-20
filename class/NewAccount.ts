import { DioAccount } from './DioAccount';

export class NewAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (value: number): void => {
		if (value > 0) {
			const totalValue = value + 10;
			this.balance = totalValue;
			console.log('Depósito realizado. Saldo atualizado:', this.balance);
		} else {
			console.log('Valor inválido para depósito');
		}
	};
}
