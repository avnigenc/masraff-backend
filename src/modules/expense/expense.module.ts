import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './expense.repository';
import { ExpenseService } from './expense.service';

@Module({
	imports: [
		forwardRef(() => AuthModule),
		TypeOrmModule.forFeature([ExpenseRepository]),
	],
	controllers: [ExpenseController],
	exports: [ExpenseService],
	providers: [ExpenseService],
})
export class ExpenseModule {}
