import { Module } from '@nestjs/common';

import { PublicController } from './public.controller';
import { ExpenseModule } from "../expense/expense.module";
import {VatRateModule} from "../vat-rate/vat-rate.module";
import {CurrencyModule} from "../currency/currency.module";

@Module({
	imports: [ExpenseModule, VatRateModule, CurrencyModule],
	controllers: [PublicController],
	exports: [],
	providers: [],
})
export class PublicModule {}
