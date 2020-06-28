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

@Entity({ name: 'currencies' })
export class CurrencyEntity {

	@PrimaryGeneratedColumn()
	@Generated('increment')
	id: number;

	@Column({ nullable: false })
	name: string;

	@OneToMany(type => ExpenseEntity, expense => expense.currency)
	expenses: ExpenseEntity[];

	@CreateDateColumn({type: 'timestamptz'})
	created_at: Date;

	@UpdateDateColumn({type: 'timestamptz'})
	updated_at: Date;
}
