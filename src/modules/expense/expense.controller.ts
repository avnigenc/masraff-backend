'use strict';

import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post, Query, Res,
	UseGuards,
	UseInterceptors, ValidationPipe,
} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiResponse, ApiTags} from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from "./dto/ExpenseCreateDto";
import { ExpenseDto } from "./dto/ExpenseDto";
import { UpdateExpenseDto } from "./dto/UpdateExpenseDto";
import {ExpensesPageDto} from "./dto/ExpensesPageDto";
import {ExpensesPageOptionsDto} from "./dto/ExpensesPageOptionsDto";
import {Exclude} from "class-transformer";
import { GetAllExpensesDto } from './dto/GetAllExpensesDto';

@Controller('expenses')
@ApiTags('expenses')
@UseGuards(AuthGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class ExpenseController {
    constructor(private _expenseService: ExpenseService) {}


	@Post('create')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: ExpenseDto, description: 'Successfully Created' })
	async createExpense(@Body() createExpenseDto: CreateExpenseDto): Promise<ExpenseDto> {
    	const createdExpense = await this._expenseService.createExpense(createExpenseDto);
		return createdExpense.toDto();
	}

	@Post('update')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: ExpenseDto, description: 'Successfully Updated' })
	async updateExpense(@Body() updateExpenseDto: UpdateExpenseDto): Promise<ExpenseDto> {
		const updatedExpense = await this._expenseService.updateExpense(updateExpenseDto);
		return updatedExpense.toDto();
	}

	@Post('getAllExpensesById')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: ExpenseDto, description: 'Successfully Updated' })
	async getAllExpensesById(@Body() getAllExpensesDto: GetAllExpensesDto, @Res() res): Promise<any> {
		console.log(getAllExpensesDto);
		console.log(getAllExpensesDto.user_id);
		const expenses = await this._expenseService.getAllExpensesById(getAllExpensesDto.user_id);
		return res.status(HttpStatus.OK).json(expenses);
	}
}
