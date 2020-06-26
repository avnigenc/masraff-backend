'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsDate,
	IsEmail,
	IsNotEmpty, IsNumber,
	IsString,
} from 'class-validator';
import { VATRateDto } from "../../vat-rate/dto/VATRateDto";
import { CurrencyDto } from "../../currency/dto/CurrencyDto";

export class CreateExpenseDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	readonly companyName: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	readonly totalAmount: number;

	@IsString()
	@IsEmail()
	@IsNotEmpty()
	@ApiProperty()
	readonly vatAmount: number;

	@IsNotEmpty()
	@ApiProperty()
	readonly vatRate: VATRateDto;

	@IsNotEmpty()
	@ApiProperty()
	readonly currency: CurrencyDto;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	readonly receiptNo: number;

	@IsDate()
	@IsNotEmpty()
	@ApiProperty()
	readonly receiptDate: Date;

	@IsDate()
	@ApiProperty()
	readonly expenseDepositDate: Date;

}
