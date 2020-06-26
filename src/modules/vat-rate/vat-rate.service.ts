import { Injectable } from '@nestjs/common';

import { VatRateEntity } from './vat-rate.entity';
import { CreateCurrencyDto } from "./dto/CreateCurrencyDto";
import { VatRateRepository } from "./vat-rate.repository";

@Injectable()
export class VatRateService {
    constructor(
        public readonly currencyRepository: VatRateRepository
    ) {}

    async createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<VatRateEntity> {
        const user = this.currencyRepository.create({ ...createCurrencyDto });
        return this.currencyRepository.save(user);
    }

}
