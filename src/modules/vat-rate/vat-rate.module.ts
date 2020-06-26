import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { VatRateController } from './vat-rate.controller';
import { VatRateRepository } from './vat-rate.repository';
import { VatRateService } from './vat-rate.service';

@Module({
	imports: [
		forwardRef(() => AuthModule),
		TypeOrmModule.forFeature([VatRateRepository]),
	],
	controllers: [VatRateController],
	exports: [VatRateService],
	providers: [VatRateService],
})
export class VatRateModule {}
