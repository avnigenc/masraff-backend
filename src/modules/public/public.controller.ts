import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Res,
} from '@nestjs/common';
import {
	ApiTags,
} from '@nestjs/swagger';

import { ExpenseService } from "../expense/expense.service";
import { VatRateService } from "../vat-rate/vat-rate.service";
import { CurrencyService } from "../currency/currency.service";

@Controller('')
@ApiTags('')
export class PublicController {
	constructor(
		public readonly _expenseService: ExpenseService,
		public readonly _vatRateService: VatRateService,
		public readonly _currencyService: CurrencyService,
	) {}

	@Get('getAllExpenses')
	@HttpCode(HttpStatus.OK)
	async getAllExpenses(@Res() res): Promise<any> {
		return res.status(HttpStatus.OK).json(
			await this._expenseService.getAllExpenses()
		);
	}

	@Get('getAllVatRates')
	@HttpCode(HttpStatus.OK)
	async getAllVatRates(@Res() res): Promise<any> {
		return res.status(HttpStatus.OK).json(
			await this._vatRateService.getAllVatRates()
		);
	}

	@Get('getAllCurrencies')
	@HttpCode(HttpStatus.OK)
	async getAllCurrencies(@Res() res): Promise<any> {
		return res.status(HttpStatus.OK).json(
			await this._currencyService.getAllCurrencies()
		);
	}
}
