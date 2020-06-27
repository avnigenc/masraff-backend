import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { ExpenseDto } from "./dto/ExpenseDto";
import { CurrencyEntity } from "../currency/currency.entity";
import { VatRateEntity } from "../vat-rate/vat-rate.entity";


@Entity({ name: 'expenses' })
export class ExpenseEntity extends AbstractEntity<ExpenseDto> {

	@Column({ nullable: false })
	companyName: string;

	@Column({ nullable: false })
	totalAmount: number;

	@Column({ nullable: false })
	vatAmount: number;

	@ManyToOne(() => VatRateEntity, vatRate => vatRate)
	@JoinColumn({name: 'vat_rate_id'})
	vatRate: VatRateEntity;

	@ManyToOne(() => CurrencyEntity, currency => currency)
	@JoinColumn({name: 'currency_id'})
	currency: CurrencyEntity;

	@Column({ nullable: false })
	receiptNo: number;

	@Column({ nullable: false })
	receiptDate: Date;

	@Column({ nullable: false })
	expenseDepositDate: Date;

	dtoClass = ExpenseDto;
}
