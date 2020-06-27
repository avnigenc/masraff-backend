'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
} from 'class-validator';
import { Expose } from "class-transformer";

export class GetAllExpensesDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	@Expose()
	readonly user_id: string;
}
