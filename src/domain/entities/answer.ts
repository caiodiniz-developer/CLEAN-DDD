export class Answer {
  public id: string;

  constructor(
    public content: string,
    id?: string,
  ) {
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
