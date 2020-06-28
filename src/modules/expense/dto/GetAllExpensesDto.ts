'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
} from 'class-validator';
import { Expose } from "class-transformer";

export class GetAllExpensesDto {
	@IsNotEmpty()
	@ApiProperty()
	@Expose()
	readonly user_id: number;
}
