'use strict';

import { ApiPropertyOptional} from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ExpenseEntity } from '../expense.entity';
import { CurrencyDto } from "../../currency/dto/CurrencyDto";
import { VATRateDto } from "../../vat-rate/dto/VATRateDto";

export class ExpenseDto extends AbstractDto {

	@ApiPropertyOptional()
	companyName: string;

	@ApiPropertyOptional()
	totalAmount: number;

	@ApiPropertyOptional()
	vatAmount: number;

	@ApiPropertyOptional()
	vatRate: VATRateDto;

	@ApiPropertyOptional()
	currency: CurrencyDto;

	@ApiPropertyOptional()
	receiptNo: number;

	@ApiPropertyOptional()
	receiptDate: Date;

	@ApiPropertyOptional()
	expenseDepositDate: Date;

	constructor(expense: ExpenseEntity) {
		super(expense);
		this.companyName = expense.companyName;
		this.totalAmount = expense.totalAmount;
		this.vatAmount = expense.vatAmount;
		this.vatRate = expense.vatRate;
		this.currency = expense.currency;
		this.receiptNo = expense.receiptNo;
		this.receiptDate = expense.receiptDate;
		this.expenseDepositDate = expense.expenseDepositDate;
	}
}
