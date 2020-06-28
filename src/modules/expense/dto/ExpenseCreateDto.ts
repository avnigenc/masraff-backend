'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsNumber,
	IsString,
} from 'class-validator';
import {Expose} from "class-transformer";

export class CreateExpenseDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly companyName: string;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly totalAmount: number;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly vatAmount: number;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly vat_rate_id: number;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly currency_id: number;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly user_id: number;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	@ApiProperty()
	@Expose()
	readonly receiptNo: number;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly receiptDate: Date;

	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly expenseDepositDate: Date;
}
