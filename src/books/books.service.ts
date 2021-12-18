import axios from 'axios';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { ConfigService } from '@nestjs/config';
import { NaverApiBookDto } from './dto/naverAPI-book.dto';

@Injectable()
export class BooksService {
  constructor(private configService: ConfigService) {}

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  async searchNaverApi(start, query) {
    return this.requestNaverApi(start, query).then(books => {
      return _.chain(books)
        .map(book => {
          return new NaverApiBookDto(
            NaverApiBookDto.getBid(book.link),
            NaverApiBookDto.parseBookTitle(book.title),
            book.author,
            book.publisher,
            NaverApiBookDto.parseBookDescription(book.description),
            book.image,
            book.isbn,
            book.pubdate,
          );
        })
        .value();
    });
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
      .then(response => {
        if (response.status == 200) return response.data.items;
        return response.status;
      })
      .catch(err => {
        return err;
      });
  }
}
