'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
} from 'class-validator';

export class CreateCurrencyDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	readonly name: string;

}
