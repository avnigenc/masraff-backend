'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { CurrencyEntity } from '../currency.entity';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CurrencyDto extends AbstractDto {
	@ApiPropertyOptional()
	name: string;

}
