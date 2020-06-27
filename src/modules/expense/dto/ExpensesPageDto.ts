import { ApiProperty } from '@nestjs/swagger';

import { PageMetaDto } from '../../../common/dto/PageMetaDto';
import { ExpenseDto } from './ExpenseDto';

export class ExpensesPageDto {
	@ApiProperty({
		type: ExpenseDto,
		isArray: true,
	})
	readonly data: ExpenseDto[];

	@ApiProperty()
	readonly meta: PageMetaDto;

	constructor(data: ExpenseDto[], meta: PageMetaDto) {
		this.data = data;
		this.meta = meta;
	}
}
