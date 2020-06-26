'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { CurrencyEntity } from '../currency.entity';

export class CurrencyDto extends AbstractDto {
	@ApiPropertyOptional()
	name: string;

	constructor(currency: CurrencyEntity) {
		super(currency);
		this.name = currency.name;
	}
}
