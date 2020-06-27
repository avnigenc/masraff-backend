'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty, IsNumber,
	IsString,
} from 'class-validator';
import { Expose } from "class-transformer";

export class UpdateExpenseDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly id: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly companyName: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly totalAmount: number;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly vatAmount: number;

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	@Expose()
	readonly vat_rate_id: string;

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	@Expose()
	readonly currency_id: string;

	@IsNumber()
	@IsNotEmpty()
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
