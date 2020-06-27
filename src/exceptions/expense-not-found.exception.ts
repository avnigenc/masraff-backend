'use strict';

import { NotFoundException } from '@nestjs/common';

export class ExpenseNotFoundException extends NotFoundException {
	constructor(error?: string) {
		super('error.expense_not_found', error);
	}
}
