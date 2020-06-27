import { Injectable } from '@nestjs/common';

import { CurrencyEntity } from './currency.entity';
import { CreateCurrencyDto } from "./dto/CreateCurrencyDto";
import { CurrencyRepository } from "./currency.repository";

@Injectable()
export class CurrencyService {
    constructor(
        public readonly currencyRepository: CurrencyRepository
    ) {}

    async createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<CurrencyEntity> {
        const user = this.currencyRepository.create({ ...createCurrencyDto });
        return this.currencyRepository.save(user);
    }

	async getAllCurrencies(): Promise<any> {
		return await this.currencyRepository.find({});
	}

}
