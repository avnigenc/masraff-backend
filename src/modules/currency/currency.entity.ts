import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { CurrencyDto } from './dto/CurrencyDto';

@Entity({ name: 'currencies' })
export class CurrencyEntity extends AbstractEntity<CurrencyDto> {
	@Column({ nullable: false })
	name: string;

	dtoClass = CurrencyDto;
}
