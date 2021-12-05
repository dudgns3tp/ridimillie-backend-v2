import { Injectable } from '@nestjs/common';
import { CreateRidiDto } from './dto/create-ridi.dto';
import { UpdateRidiDto } from './dto/update-ridi.dto';

@Injectable()
export class RidiService {
  create(createRidiDto: CreateRidiDto) {
    return 'This action adds a new ridi';
  }

  findAll() {
    return `This action returns all ridi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ridi`;
  }

  update(id: number, updateRidiDto: UpdateRidiDto) {
    return `This action updates a #${id} ridi`;
  }

  remove(id: number) {
    return `This action removes a #${id} ridi`;
  }
}
