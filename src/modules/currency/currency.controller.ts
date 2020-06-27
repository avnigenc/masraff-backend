'use strict';

import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags} from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { CurrencyService } from './currency.service';
import { CurrencyDto } from "./dto/CurrencyDto";
import { CreateCurrencyDto } from "./dto/CreateCurrencyDto";

@Controller('currencies')
@ApiTags('currencies')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class CurrencyController {
    constructor(private _currencyService: CurrencyService) {}

	@Post('create')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: CurrencyDto, description: 'Successfully Created' })
	async createCurrency(@Body() createCurrencyDto: CreateCurrencyDto): Promise<CurrencyDto> {
		const createdCurrency = await this._currencyService.createCurrency(createCurrencyDto);
		return createdCurrency.toDto();
	}
}
