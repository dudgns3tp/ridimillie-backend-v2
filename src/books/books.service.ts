import axios from 'axios';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BooksService {
  constructor(private configService: ConfigService) {}
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  async searchNaverApi(start, query) {
    const result = await this.requestNaverApi(start, query);
    //_.chain(result).map()
    return result;
  }

  requestNaverApi(start, query) {
    const clientId = this.configService.get<string>('naverClientId');
    const clientSecret = this.configService.get<string>('naverClientSecret');

    const api_url =
      'https://openapi.naver.com/v1/search/book.json?query=' +
      encodeURI(query) +
      '&start=' +
      start;

    return axios
      .get(api_url, {
        headers: {
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientSecret,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) return response.data.items;
        return response.status;
      })
      .catch((err) => {
        return err;
      });
  }
}
