import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VATRateDto } from './dto/VATRateDto';

@Entity({ name: 'vatrates' })
export class VatRateEntity extends AbstractEntity<VATRateDto> {
	@Column({ nullable: false })
	amount: number;

	dtoClass = VATRateDto;
}
