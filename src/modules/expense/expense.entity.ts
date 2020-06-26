import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { ExpenseDto } from "./dto/ExpenseDto";
import { CurrencyDto } from "../currency/dto/CurrencyDto";
import { VATRateDto } from "../vat-rate/dto/VATRateDto";


@Entity({ name: 'expenses' })
export class ExpenseEntity extends AbstractEntity<ExpenseDto> {

	@Column({ nullable: false })
	companyName: string;

	@Column({ nullable: false })
	totalAmount: number;

	@Column({ nullable: false })
	vatAmount: number;

	@Column({ nullable: false })
	vatRate: VATRateDto;

	@Column({ nullable: false })
	currency: CurrencyDto;

	@Column({ nullable: false })
	receiptNo: number;

	@Column({ nullable: false })
	receiptDate: Date;

	@Column({ nullable: false })
	expenseDepositDate: Date;

	dtoClass = ExpenseDto;
}
