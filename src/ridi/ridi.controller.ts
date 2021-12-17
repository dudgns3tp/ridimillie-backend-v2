import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RidiService } from './ridi.service';
import { CreateRidiDto } from './dto/create-ridi.dto';
import { UpdateRidiDto } from './dto/update-ridi.dto';

@Controller('ridi')
export class RidiController {
  constructor(private readonly ridiService: RidiService) {}

  @Post()
  create(@Body() createRidiDto: CreateRidiDto) {
    return this.ridiService.create(createRidiDto);
  }

  @Get()
  findAll() {
    return this.ridiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRidiDto: UpdateRidiDto) {
    return this.ridiService.update(+id, updateRidiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridiService.remove(+id);
  }
}
