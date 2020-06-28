'use strict';

import {
	Body,
	Controller, HttpCode, HttpStatus, Post, Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags} from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { VatRateService } from './vat-rate.service';
import { VATRateDto } from "./dto/VATRateDto";
import { CreateVATRateDto } from "./dto/CreateVATRateDto";

@Controller('vatRates')
@ApiTags('vatRates')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class VatRateController {
    constructor(private _vatRateService: VatRateService) {}

	@Post('create')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: VATRateDto, description: 'Successfully Created' })
	async createVatRate(@Body() createVATRateDto: CreateVATRateDto, @Res() res): Promise<VATRateDto> {
		const createdVatRate = await this._vatRateService.createVATRate(createVATRateDto);
		return res.status(HttpStatus.OK).json(createdVatRate);
	}
}
