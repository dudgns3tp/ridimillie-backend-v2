enum bookType {
  subscribe,
  purchase,
}
export class Book {
  platform: string; // hashKey
  id: number; // rangeKey globalIndex
  title: string; // index
  viewCount: number;
  type: bookType;
  url: string;
}
