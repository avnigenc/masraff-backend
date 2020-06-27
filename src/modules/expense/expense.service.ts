import { Injectable } from '@nestjs/common';

import { CreateExpenseDto } from './dto/ExpenseCreateDto';
import { ExpenseEntity } from './expense.entity';
import { ExpenseRepository } from "./expense.repository";
import { CurrencyEntity } from "../currency/currency.entity";
import { VatRateEntity } from "../vat-rate/vat-rate.entity";
import { UpdateExpenseDto } from "./dto/UpdateExpenseDto";
import { ExpenseNotFoundException } from "../../exceptions/expense-not-found.exception";
import {PageOptionsDto} from "../../common/dto/PageOptionsDto";
import {ExpensesPageDto} from "./dto/ExpensesPageDto";
import {PageMetaDto} from "../../common/dto/PageMetaDto";

@Injectable()
export class ExpenseService {
    constructor(
        public readonly expenseRepository: ExpenseRepository
    ) {}

    async createExpense(createExpenseDto: CreateExpenseDto): Promise<ExpenseEntity> {

    	let expenseEntity = new ExpenseEntity();
		expenseEntity.currency = new CurrencyEntity();
		expenseEntity.vatRate = new VatRateEntity();

		expenseEntity.companyName = createExpenseDto.companyName;
    	expenseEntity.totalAmount = createExpenseDto.totalAmount;
    	expenseEntity.vatAmount = createExpenseDto.vatAmount;
		expenseEntity.currency.id = createExpenseDto.currency_id;
    	expenseEntity.vatRate.id = createExpenseDto.vat_rate_id;
    	expenseEntity.receiptDate = createExpenseDto.receiptDate;
    	expenseEntity.receiptNo = createExpenseDto.receiptNo;
    	expenseEntity.expenseDepositDate = createExpenseDto.expenseDepositDate;

        let expense = this.expenseRepository.create(expenseEntity)
        return this.expenseRepository.save(expense);
    }

	async updateExpense(updateExpenseDto: UpdateExpenseDto): Promise<ExpenseEntity> {

    	let expense = new ExpenseEntity();
		expense.currency = new CurrencyEntity();
		expense.vatRate = new VatRateEntity();

		expense = await this.expenseRepository.findOne({
			where: {
				id : updateExpenseDto.id
			},
			relations: ['vatRate', 'currency']
		});


		if (!expense) {
			throw new ExpenseNotFoundException();
		}

		expense.companyName = updateExpenseDto.companyName;
		expense.totalAmount = updateExpenseDto.totalAmount;
		expense.vatAmount = updateExpenseDto.vatAmount;
		expense.currency.id = updateExpenseDto.currency_id;
		expense.vatRate.id = updateExpenseDto.vat_rate_id;
		expense.receiptDate = updateExpenseDto.receiptDate;
		expense.receiptNo = updateExpenseDto.receiptNo;
		expense.expenseDepositDate = updateExpenseDto.expenseDepositDate;

		return this.expenseRepository.save(expense);
	}

	async getAllExpenses(): Promise<any> {
		return await this.expenseRepository.find({
			relations: ['vatRate', 'currency']
		});
	}
}
