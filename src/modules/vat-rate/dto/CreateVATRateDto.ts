'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsNumber,
} from 'class-validator';

export class CreateVATRateDto {
	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	readonly amount: number;

}
