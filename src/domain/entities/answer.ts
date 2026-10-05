export class Question {
  public content: string;
  public id: string;

  constructor(content: string, id?: string) {
    this.content = content;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
