export class Question {
  public title: string;
  public content: string;
  public id: string;
  public authorId: string;

  constructor(title: string, authorId: string, content: string, id?: string) {
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
