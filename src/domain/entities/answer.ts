
export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(content: string, id?: string) {
    this.content = content;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
