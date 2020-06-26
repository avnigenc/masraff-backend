import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { CurrencyEntity } from './currency.entity';

@EntityRepository(CurrencyEntity)
export class CurrencyRepository extends Repository<CurrencyEntity> {}
