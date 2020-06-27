import {Column, Entity, OneToMany} from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VATRateDto } from './dto/VATRateDto';
import {ExpenseEntity} from "../expense/expense.entity";

@Entity({ name: 'vatrates' })
export class VatRateEntity extends AbstractEntity<VATRateDto> {
	@Column({ nullable: false })
	amount: number;

	dtoClass = VATRateDto;
}
