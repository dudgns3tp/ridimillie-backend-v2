import { Injectable } from '@nestjs/common';
import { Book } from 'src/api/books/entities/book.entity';
import { CrawlerBuilder } from './crawler.service';

@Injectable()
export class RidiBooksService implements CrawlerBuilder {
  private url: string;
  private title: string;

  constructor(title: string) {
    this.setTitle(title);
    this.setTargetUrl();
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setTargetUrl(): void {
    this.url = `https://search-api.ridibooks.com/search?keyword=${this.title}=&where=book&site=ridi-select&what=base&start=0`;
  }

  async crawling() {
    //Todo get data
  }

  static toEntity(title: string): Book {
    const ridi = new RidiBooksService(title);
  }
}
