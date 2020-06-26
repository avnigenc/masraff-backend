import { Injectable } from '@nestjs/common';

import { CreateExpenseDto } from './dto/ExpenseCreateDto';
import { ExpenseEntity } from './expense.entity';
import { ExpenseRepository } from "./expense.repository";

@Injectable()
export class ExpenseService {
    constructor(
        public readonly expenseRepository: ExpenseRepository
    ) {}

    async createExpense(createExpenseDto: CreateExpenseDto): Promise<ExpenseEntity> {
        const user = this.expenseRepository.create({ ...createExpenseDto });
        return this.expenseRepository.save(user);
    }

}
