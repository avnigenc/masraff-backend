import {Column, Entity, ManyToOne} from 'typeorm';

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

	@ManyToOne(type => VatRateEntity, vatRate =>  vatRate,{ nullable: false })
	vatRate: VatRateEntity;

	@ManyToOne(type => CurrencyEntity, currency =>  currency,{ nullable: false })
	currency: CurrencyEntity;

	@Column({ nullable: false })
	receiptNo: number;

	@Column({ nullable: false })
	receiptDate: Date;

	@Column({ nullable: false })
	expenseDepositDate: Date;

	dtoClass = ExpenseDto;
}
