import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post, Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';

import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { UserDto } from '../user/dto/UserDto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        public readonly userService: UserService,
        public readonly authService: AuthService,
    ) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: 'User info with access token',
    })
    async userLogin(@Body() userLoginDto: UserLoginDto, @Res() res): Promise<LoginPayloadDto> {
        const userEntity = await this.authService.validateUser(userLoginDto)
		console.log(userEntity);
        const token = await this.authService.createToken(userEntity);
		console.log(token);
        return res.status(HttpStatus.OK).json({ userEntity, token });

	}

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
    async userRegister(@Body() userRegisterDto: UserRegisterDto, @Res() res): Promise<UserDto> {
        const createdUser = await this.userService.createUser(userRegisterDto);
		return res.status(HttpStatus.OK).json(createdUser);

	}

    @Get('me')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @UseInterceptors(AuthUserInterceptor)
    @ApiBearerAuth()
    @ApiOkResponse({ type: UserDto, description: 'current user info' })
    getCurrentUser(@AuthUser() user: UserEntity, @Res() res) {
		return res.status(HttpStatus.OK).json(user);
    }
}
