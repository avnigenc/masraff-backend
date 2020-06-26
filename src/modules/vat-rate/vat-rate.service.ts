import { Injectable } from '@nestjs/common';

import { VatRateEntity } from './vat-rate.entity';
import { CreateVATRateDto } from "./dto/CreateVATRateDto";
import { VatRateRepository } from "./vat-rate.repository";

@Injectable()
export class VatRateService {
    constructor(
        public readonly vatRateRepository: VatRateRepository
    ) {}

    async createVATRate(createVATRateDto: CreateVATRateDto): Promise<VatRateEntity> {
        const vatRate = this.vatRateRepository.create({ ...createVATRateDto });
        return this.vatRateRepository.save(vatRate);
    }

}
