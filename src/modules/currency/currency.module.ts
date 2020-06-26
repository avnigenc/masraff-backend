import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { CurrencyController } from './currency.controller';
import { CurrencyRepository } from './currency.repository';
import { CurrencyService } from './currency.service';

@Module({
	imports: [
		forwardRef(() => AuthModule),
		TypeOrmModule.forFeature([CurrencyRepository]),
	],
	controllers: [CurrencyController],
	exports: [CurrencyService],
	providers: [CurrencyService],
})
export class CurrencyModule {}
