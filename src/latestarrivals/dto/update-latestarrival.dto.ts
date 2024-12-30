import { PartialType } from '@nestjs/swagger';
import { CreateLatestarrivalDto } from './create-latestarrival.dto';

export class UpdateLatestarrivalDto extends PartialType(CreateLatestarrivalDto) {}
