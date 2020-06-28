'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';

export class VATRateDto extends AbstractDto {
	@ApiPropertyOptional()
	amount: number;

}
