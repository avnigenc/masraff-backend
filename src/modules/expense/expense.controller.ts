'use strict';

import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post, Res
} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags} from '@nestjs/swagger';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from "./dto/ExpenseCreateDto";
import { ExpenseDto } from "./dto/ExpenseDto";
import { UpdateExpenseDto } from "./dto/UpdateExpenseDto";
import { GetAllExpensesDto } from './dto/GetAllExpensesDto';

@Controller('expenses')
@ApiTags('expenses')
@ApiBearerAuth()
export class ExpenseController {
    constructor(private _expenseService: ExpenseService) {}


	@Post('create')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: ExpenseDto, description: 'Successfully Created' })
	async createExpense(@Body() createExpenseDto: CreateExpenseDto, @Res() res): Promise<ExpenseDto> {
    	const createdExpense = await this._expenseService.createExpense(createExpenseDto);
		return res.status(HttpStatus.OK).json(createdExpense);
	}

	@Post('update')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: ExpenseDto, description: 'Successfully Updated' })
	async updateExpense(@Body() updateExpenseDto: UpdateExpenseDto, @Res() res): Promise<ExpenseDto> {
		const updatedExpense = await this._expenseService.updateExpense(updateExpenseDto);
		return res.status(HttpStatus.OK).json(updatedExpense);
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
