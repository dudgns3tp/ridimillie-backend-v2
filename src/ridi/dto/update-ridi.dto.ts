import { PartialType } from '@nestjs/mapped-types';
import { CreateRidiDto } from './create-ridi.dto';

export class UpdateRidiDto extends PartialType(CreateRidiDto) {}
