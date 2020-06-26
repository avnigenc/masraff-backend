'use strict';

import {
    Controller,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { CurrencyService } from './currency.service';

@Controller('currencies')
@ApiTags('currencies')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class CurrencyController {
    constructor(private _currencyService: CurrencyService) {}


}
