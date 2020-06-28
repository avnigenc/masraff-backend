import './boilerplate.polyfill';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { CurrencyModule } from "./modules/currency/currency.module";
import { VatRateModule } from "./modules/vat-rate/vat-rate.module";
import { ExpenseModule } from "./modules/expense/expense.module";
import { PublicModule } from "./modules/public/public.module";

@Module({
    imports: [
    	PublicModule,
        UserModule,
		ExpenseModule,
		CurrencyModule,
		VatRateModule,
		AuthModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware)
			.forRoutes('*');
    }
}
