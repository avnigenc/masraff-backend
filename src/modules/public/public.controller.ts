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

	@Get('seedVatRate')
	@HttpCode(HttpStatus.OK)
	async seedVatRate(@Res() res): Promise<any> {
		let message;
		const vatRateCount = await this._vatRateService.getAllVatRates();
		if (vatRateCount.length < 3) {
			const vatRates = [
				{ amount: 0 },
				{ amount: 8 },
				{ amount: 18 }
			];
			vatRates.forEach((wr) => {
				this._vatRateService.createVATRate(wr);
			});
			message = 'vat rate seed data created';
		} else {
			message = 'already seeded';
		}
		return res.status(HttpStatus.OK).json({ message });
	}

	@Get('seedCurrency')
	@HttpCode(HttpStatus.OK)
	async seedCurrency(@Res() res): Promise<any> {
		let message;
		const currencyCount = await this._currencyService.getAllCurrencies();
		if (currencyCount.length < 3) {
			const currencies = [
				{ name: 'TRY' },
				{ name: 'USD' },
				{ name: 'EUR' }
			];
			currencies.forEach((c) => {
				this._currencyService.createCurrency(c);
			});
			message = 'currency seed data created';
		} else {
			message = 'already seeded';
		}
		return res.status(HttpStatus.OK).json({ message });
	}
}
