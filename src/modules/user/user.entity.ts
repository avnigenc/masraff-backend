import {
	Column,
	CreateDateColumn,
	Entity,
	Generated,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UserDto } from './dto/UserDto';
import { ExpenseEntity } from '../expense/expense.entity';

@Entity({ name: 'users' })
export class UserEntity  {

	@PrimaryGeneratedColumn()
	@Generated('increment')
	id: number;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

	@OneToMany(type => ExpenseEntity, expense => expense.user)
	expenses: ExpenseEntity[];

	@CreateDateColumn({type: 'timestamptz'})
	created_at: Date;

	@UpdateDateColumn({type: 'timestamptz'})
	updated_at: Date;
}
