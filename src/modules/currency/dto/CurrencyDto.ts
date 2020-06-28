'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';

export class CurrencyDto extends AbstractDto {
	@ApiPropertyOptional()
	name: string;

}
