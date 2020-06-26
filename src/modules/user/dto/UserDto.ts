'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    firstName: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiPropertyOptional()
    username: string;

    @ApiPropertyOptional()
    email: string;


    constructor(user: UserEntity) {
        super(user);
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    }
}
