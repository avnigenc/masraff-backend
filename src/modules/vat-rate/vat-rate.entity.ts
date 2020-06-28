import {
	Column,
	CreateDateColumn,
	Entity,
	Generated,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import { ExpenseEntity } from '../expense/expense.entity';

@Entity({ name: 'vatrates' })
export class VatRateEntity {

	@PrimaryGeneratedColumn()
	@Generated('increment')
	id: number;

	@Column({ nullable: false })
	amount: number;

	@OneToMany(type => ExpenseEntity, expense => expense.vatRate)
	expenses: ExpenseEntity[];

	@CreateDateColumn({type: 'timestamptz'})
	created_at: Date;

	@UpdateDateColumn({type: 'timestamptz'})
	updated_at: Date;

}
