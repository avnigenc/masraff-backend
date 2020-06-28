import {
	Column,
	CreateDateColumn,
	Entity, Generated,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import { CurrencyEntity } from "../currency/currency.entity";
import { VatRateEntity } from "../vat-rate/vat-rate.entity";
import { UserEntity } from '../user/user.entity';


@Entity({ name: 'expenses' })
export class ExpenseEntity {

	@PrimaryGeneratedColumn()
	@Generated('increment')
	id: number;

	@Column({ nullable: false })
	companyName: string;

	@Column({ nullable: false, type: 'decimal' })
	totalAmount: number;

	@Column({ nullable: false, type: 'decimal' })
	vatAmount: number;

	@ManyToOne(() => VatRateEntity, vatRate => vatRate.expenses)
	@JoinColumn({name: 'vat_rate_id'})
	vatRate: VatRateEntity;

	@ManyToOne(() => CurrencyEntity, currency => currency.expenses)
	@JoinColumn({name: 'currency_id'},)
	currency: CurrencyEntity;

	@ManyToOne(() => UserEntity, user => user.expenses)
	@JoinColumn({name: 'user_id'})
	user: UserEntity;

	@Column({ nullable: false })
	receiptNo: number;

	@Column({ nullable: false, type: 'timestamptz' })
	receiptDate: Date;

	@Column({ nullable: false, type: 'timestamptz' })
	expenseDepositDate: Date;

	@CreateDateColumn({type: 'timestamptz'})
	created_at: Date;

	@UpdateDateColumn({type: 'timestamptz'})
	updated_at: Date;


}
