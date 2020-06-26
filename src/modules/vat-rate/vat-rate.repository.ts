import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { VatRateEntity } from './vat-rate.entity';

@EntityRepository(VatRateEntity)
export class VatRateRepository extends Repository<VatRateEntity> {}
