'use strict';

import {
    Controller,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { VatRateService } from './vat-rate.service';

@Controller('vatRates')
@ApiTags('vatRates')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class VatRateController {
    constructor(private _vatRateService: VatRateService) {}


}
