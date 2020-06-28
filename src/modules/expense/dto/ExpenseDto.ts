'use strict';

import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ExpenseEntity } from '../expense.entity';
import {VatRateEntity} from "../../vat-rate/vat-rate.entity";
import {CurrencyEntity} from "../../currency/currency.entity";
import { UserEntity } from '../../user/user.entity';
import { ValidateNested } from 'class-validator';
import { VATRateDto } from '../../vat-rate/dto/VATRateDto';
import { CurrencyDto } from '../../currency/dto/CurrencyDto';
import { UserDto } from '../../user/dto/UserDto';

export class ExpenseDto extends AbstractDto {

	@ApiPropertyOptional()
	companyName: string;

	@ApiPropertyOptional()
	totalAmount: number;

	@ApiPropertyOptional()
	vatAmount: number;

	@ApiPropertyOptional()
	@ValidateNested({each: true})
	vatRate: VATRateDto;

	@ApiPropertyOptional()
	@ValidateNested({each: true})
	currency: CurrencyDto;

	@ApiPropertyOptional()
	@ValidateNested({each: true})
	user: UserDto;

	@ApiPropertyOptional()
	receiptNo: number;

	@ApiPropertyOptional()
	receiptDate: Date;

	@ApiPropertyOptional()
	expenseDepositDate: Date;

}
