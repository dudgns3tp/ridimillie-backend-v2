import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
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
    return result;
  }

  requestNaverApi(start, query) {
    console.log(process.env.NAVER_CLIENT_ID);
    const api_url =
      'https://openapi.naver.com/v1/search/book.json?query=' +
      encodeURI(query) +
      '&start=' +
      start;

    axios
      .get(api_url, {
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) return JSON.parse(response.data).items;
      });

    // request.get(options, function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     const result = JSON.parse(body).items;
    //     resolve(result);
    //   } else {
    //     reject(response.statusCode);
    //   }
    // });
  }
}
