'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UserDto {
	@PrimaryGeneratedColumn()
	id: number;

    @ApiPropertyOptional()
    firstName: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    email: string;

}
