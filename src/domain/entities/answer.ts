export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(
    title: string,
    authorId: string,
    questionId: string,
    content: string,
    id?: string,
  ) {
    this.content = content;
    this.authorId = authorId;
    this.questionId = questionId;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
