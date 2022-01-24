export class NaverApiBookDto {
  bid: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
  image: string;
  isbn: number;
  pubdate: string;

  constructor(
    bid: string,
    title: string,
    author: string,
    publisher: string,
    description: string,
    image: string,
    isbn: number,
    pubdate: string,
  ) {
    this.bid = bid;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.description = description;
    this.isbn = isbn;
    this.image = image;
    this.pubdate = pubdate;
  }

  static getBid(link: string) {
    return link.split('bid=')[1];
  }

  static parseBookTitle(title) {
    return JSON.parse(
      JSON.stringify(title)
        .replace(/(<b>)|(<\/b>)/gi, '')
        .replace(/ *\([^)]*\) */g, ''),
    );
  }

  static parseBookDescription(description) {
    return JSON.parse(
      JSON.stringify(description).replace(/(<b>)|(<\/b>)/gi, ''),
    );
  }
}
