import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacioneDto } from './create-transacione.dto';

export class UpdateTransacioneDto extends PartialType(CreateTransacioneDto) {}
