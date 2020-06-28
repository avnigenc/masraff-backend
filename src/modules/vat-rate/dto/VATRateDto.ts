'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { VatRateEntity } from '../vat-rate.entity';

export class VATRateDto extends AbstractDto {
	@ApiPropertyOptional()
	amount: number;

}
