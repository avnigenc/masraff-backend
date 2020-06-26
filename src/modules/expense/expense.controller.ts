'use strict';

import {
    Controller,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { ExpenseService } from './expense.service';

@Controller('expenses')
@ApiTags('expenses')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class ExpenseController {
    constructor(private _expenseService: ExpenseService) {}


}
