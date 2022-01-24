import { Injectable } from '@nestjs/common';
import { Book } from 'src/api/books/entities/book.entity';

export interface CrawlerBuilder {
  url: string;
  title: string;

  crawling(): any;
  toEntity(title: string): Book;
  setTargetUrl(): void;
  setSelector(): void;
  setTitle(title: string): void;
}

@Injectable()
export class CrawlerService {}
