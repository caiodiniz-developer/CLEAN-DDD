export class Answer {
  public id: string;

  constructor(
    public content: string,
    public authorId: string,
    public questionId: string,
    id?: string,
  ) {
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
